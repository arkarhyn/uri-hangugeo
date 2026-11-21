/**
 * 우리 한국어 progress log.
 *
 * Setup (once): open a new Google Sheet, Extensions > Apps Script, replace the
 * contents of Code.gs with this file, save, then Deploy > New deployment >
 * type "Web app", Execute as "Me", Who has access "Anyone". Copy the /exec URL
 * into SHEET_URL near the top of index.html's script.
 *
 * The site POSTs finished quizzes here (who, activity, lesson, score) and
 * reads them back with GET for the Progress page. It stores only the name
 * you type on the site and your scores.
 */
const TAB = "Log";
const KINDS = ["lesson", "slides", "review", "gym"];

function tab_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(TAB);
  if (!sh) {
    sh = ss.insertSheet(TAB);
    sh.appendRow(["When", "Who", "Activity", "Item", "Right", "Total", "Percent"]);
    sh.setFrozenRows(1);
    sh.getRange("G:G").setNumberFormat("0%");
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const body = JSON.parse(e.postData.contents);
    const events = Array.isArray(body.events) ? body.events.slice(0, 200) : [];
    const now = Date.now();
    const rows = [];
    events.forEach(function (ev) {
      const who = String(ev.who || "").trim().slice(0, 30);
      const kind = String(ev.kind || "");
      const item = String(ev.item || "").slice(0, 30);
      const right = Math.max(0, Math.min(999, Number(ev.right) || 0));
      const total = Math.max(0, Math.min(999, Number(ev.total) || 0));
      const at = Number(ev.at);
      if (!who || KINDS.indexOf(kind) < 0) return;
      const when = at > 1.7e12 && at < now + 864e5 ? new Date(at) : new Date();
      rows.push([when, who, kind, item, right, total, total ? right / total : ""]);
    });
    if (rows.length) {
      const sh = tab_();
      sh.getRange(sh.getLastRow() + 1, 1, rows.length, 7).setValues(rows);
    }
    return json_({ ok: true, added: rows.length });
  } catch (err) {
    return json_({ ok: false });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  const sh = tab_();
  const n = sh.getLastRow() - 1;
  const values = n > 0 ? sh.getRange(2, 1, n, 6).getValues() : [];
  const rows = values.map(function (r) {
    return {
      when: r[0] instanceof Date ? r[0].toISOString() : String(r[0]),
      who: r[1], kind: r[2], item: r[3], right: r[4], total: r[5]
    };
  });
  return json_({ rows: rows });
}
