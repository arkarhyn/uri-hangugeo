/**
 * 우리 한국어 progress log.
 *
 * Setup (once): open a new Google Sheet, Extensions > Apps Script, replace the
 * contents of Code.gs with this file, save, then Deploy > New deployment >
 * type "Web app", Execute as "Me", Who has access "Anyone". Copy the /exec URL
 * into SHEET_URL near the top of index.html's script.
 * After editing this file later: Deploy > Manage deployments > Edit >
 * Version "New version". That keeps the same /exec URL.
 *
 * The site POSTs finished activities here (who, activity, item, score, event id)
 * and reads them back with GET for the Progress page. It stores only the name
 * typed on the site and the scores.
 *
 * The /exec URL is public, so everything a request sends is untrusted:
 * - text that a spreadsheet would read as a formula is stored as plain text;
 * - only known activities and items are accepted;
 * - names, batch size and request size are capped;
 * - each event carries an id, and an id already in the sheet is skipped, so a
 *   retry from the site never adds a row twice.
 */
const TAB = "Log";
const HEAD = ["When", "Who", "Activity", "Item", "Right", "Total", "Percent", "Id"];

// Lesson ids are checked by shape, so adding a lesson to index.html needs no
// script update. Keep the fixed lists in step with GYM_MODES in index.html.
const LESSON_RE = /^[a-z][a-z0-9-]{1,23}$/;
const ITEMS = {
  review: ["mixed"],
  gym: ["sino", "native", "time", "count", "money", "mix"]
};
function itemOk_(kind, item) {
  if (kind === "lesson" || kind === "slides") return LESSON_RE.test(item);
  return Object.prototype.hasOwnProperty.call(ITEMS, kind) && ITEMS[kind].indexOf(item) >= 0;
}
const MAX_BODY = 50000;   // characters per request
const MAX_EVENTS = 200;   // events per request
const MAX_NAME = 30;
const ID_RE = /^[A-Za-z0-9_-]{8,40}$/;

function tab_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(TAB);
  if (!sh) {
    sh = ss.insertSheet(TAB);
    sh.appendRow(HEAD);
    sh.setFrozenRows(1);
    sh.getRange("G:G").setNumberFormat("0%");
  } else if (sh.getLastColumn() < HEAD.length) {
    sh.getRange(1, 1, 1, HEAD.length).setValues([HEAD]); // older sheet: add the Id header
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// A leading apostrophe makes Sheets store the text as-is, never as a formula.
function plain_(s) {
  s = String(s == null ? "" : s).replace(/[\u0000-\u001f\u007f]/g, " ").trim();
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function num_(v) {
  const n = Math.round(Number(v));
  return isFinite(n) ? Math.max(0, Math.min(999, n)) : 0;
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  let locked = false;
  try {
    const raw = e && e.postData ? String(e.postData.contents || "") : "";
    if (!raw || raw.length > MAX_BODY) return json_({ ok: false, error: "size" });
    const body = JSON.parse(raw);
    const events = Array.isArray(body.events) ? body.events.slice(0, MAX_EVENTS) : [];

    lock.waitLock(10000);
    locked = true;
    const sh = tab_();
    const last = sh.getLastRow();
    const seen = {};
    if (last > 1) {
      sh.getRange(2, 8, last - 1, 1).getValues().forEach(function (r) { if (r[0]) seen[String(r[0])] = true; });
    }

    const now = Date.now();
    const rows = [], done = [];
    let skipped = 0;
    events.forEach(function (ev) {
      ev = ev || {};
      const id = String(ev.id || "");
      if (!ID_RE.test(id)) { skipped++; return; }      // no usable id: can't be acknowledged
      done.push(id);                                    // saved, duplicate or invalid: the site may drop it
      if (seen[id]) return;
      const kind = String(ev.kind || "");
      const item = String(ev.item || "");
      const who = String(ev.who || "").replace(/\s+/g, " ").trim().slice(0, MAX_NAME);
      if (!who || !itemOk_(kind, item)) { skipped++; return; }
      const right = num_(ev.right), total = num_(ev.total);
      const at = Number(ev.at);
      const when = at > 1.7e12 && at < now + 864e5 ? new Date(at) : new Date();
      rows.push([when, plain_(who), kind, item, right, total, total ? right / total : "", id]);
      seen[id] = true;
    });
    if (rows.length) sh.getRange(last + 1, 1, rows.length, HEAD.length).setValues(rows);
    return json_({ ok: true, added: rows.length, skipped: skipped, done: done });
  } catch (err) {
    return json_({ ok: false, error: "bad request" });
  } finally {
    if (locked) lock.releaseLock();
  }
}

function doGet() {
  const sh = tab_();
  const n = sh.getLastRow() - 1;
  const values = n > 0 ? sh.getRange(2, 1, n, 6).getValues() : [];
  const rows = values.map(function (r) {
    return {
      when: r[0] instanceof Date ? r[0].toISOString() : String(r[0]),
      who: String(r[1]), kind: String(r[2]), item: String(r[3]), right: Number(r[4]) || 0, total: Number(r[5]) || 0
    };
  });
  return json_({ rows: rows });
}
