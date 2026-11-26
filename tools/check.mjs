// Lesson checker: node tools/check.mjs
// Loads lessons/sources.js and every lesson file, in the order index.html's <script> tags list them, and checks their shape.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const tagged = [...html.matchAll(/<script src="(lessons\/[^"]+\.js)"><\/script>/g)].map(m => m[1]);
const onDisk = fs.readdirSync(path.join(root, 'lessons')).filter(f => f.endsWith('.js')).map(f => 'lessons/' + f);
const loadErrs = [];
onDisk.filter(f => !tagged.includes(f)).forEach(f => loadErrs.push(`${f} has no <script> tag in index.html, so the site never loads it`));
tagged.filter(f => !onDisk.includes(f)).forEach(f => loadErrs.push(`index.html loads ${f}, which doesn't exist`));
if (tagged[0] !== 'lessons/sources.js') loadErrs.push('lessons/sources.js must be the first lesson script in index.html');
if (loadErrs.length) { console.error(loadErrs.join('\n')); process.exit(1); }
let SRC, LESSONS;
try {
  const code = tagged.map(f => fs.readFileSync(path.join(root, f), 'utf8').replace(/^﻿?"use strict";/, '')).join('\n;\n');
  ({ SRC, LESSONS } = new Function(code + '\nreturn {SRC, LESSONS};')());
} catch (e) { console.error('A lesson file has a JavaScript error: ' + e.message); process.exit(1); }

const errs = [], warns = [];
const bad = (L, msg) => errs.push(`${L.id || '?'}: ${msg}`);
const warn = (L, msg) => warns.push(`${L.id || '?'}: ${msg}`);
// Bracket markup: [x] highlight, or [s:] stem, [e:] ending, [c:] changed, [x:] dropped.
const markup = (L, where, str) => {
  if (typeof str !== 'string') return;
  const open = (str.match(/\[/g) || []).length, close = (str.match(/\]/g) || []).length;
  if (open !== close) { bad(L, `${where}: unbalanced brackets in "${str}"`); return; }
  for (const m of str.matchAll(/\[([^\]]*)\]/g)) {
    const t = m[1];
    if (t.includes('[')) bad(L, `${where}: nested brackets in "${str}"`);
    const r = /^([A-Za-z]):(.*)$/.exec(t);
    if (r && !'secx'.includes(r[1])) bad(L, `${where}: unknown role "${r[1]}:" in "${str}" (use s, e, c or x)`);
    if (!(r ? r[2] : t).trim()) bad(L, `${where}: empty highlight in "${str}"`);
  }
};
// Same as strip() in app.js: drops [x:...] parts and the bracket markup.
const strip = s => String(s).replace(/\[x:[^\]]*\]/g, '').replace(/\[[secx]:/g, '').replace(/[\[\]]/g, '');
const sentences = s => (s.replace(/\([^)]*\)|"[^"]*"/g, '').match(/[.!?](\s|$)/g) || []).length;
const ids = new Set();
const ID = /^[a-z][a-z0-9-]{1,23}$/;

for (const L of LESSONS) {
  if (!ID.test(L.id || '')) bad(L, `id "${L.id}" must match ${ID}`);
  if (ids.has(L.id)) bad(L, 'duplicate id'); ids.add(L.id);
  for (const f of ['ko', 'title', 'blurb', 'after']) if (typeof L[f] !== 'string' || !L[f]) bad(L, `missing ${f}`);
  for (const f of ['src', 'goals', 'slides', 'vocab', 'ex', 'plan', 'talk']) if (!Array.isArray(L[f]) || !L[f].length) bad(L, `missing ${f}[]`);
  (L.src || []).forEach(k => { if (!SRC[k]) bad(L, `src "${k}" is not in SRC`); });
  (L.slides || []).forEach((s, i) => {
    if (!s.h) bad(L, `slide ${i + 1} has no h`);
    const at = `slide ${i + 1}`;
    if (!s.p && !s.t && !s.ex && !s.steps) bad(L, `${at} is empty`);
    markup(L, at, s.h); markup(L, at, s.p);
    (s.t || []).forEach(r => r.forEach(c => markup(L, at, c)));
    (s.ex || []).forEach(e => markup(L, at, e[0]));
    if (s.note !== undefined) {
      const ns = [].concat(s.note);
      if (!ns.every(n => typeof n === 'string' && n)) bad(L, `${at}: note must be a string or an array of strings`);
      ns.forEach(n => { markup(L, at, n); if (/^(watch out|see also)\b/i.test(n) && !/^(Watch out|See also): /.test(n)) bad(L, `${at}: write the label exactly "Watch out: " or "See also: "`); });
    }
    if (s.steps !== undefined) {
      if (!Array.isArray(s.steps) || !s.steps.length) bad(L, `${at}: steps must be an array of chains`);
      else s.steps.forEach((c, j) => {
        if (!Array.isArray(c) || c.length < 2 || !c.every(x => typeof x === 'string' && x)) bad(L, `${at} chain ${j + 1}: needs 2 or more non-empty strings`);
        else c.forEach(x => markup(L, at, x));
      });
    }
    // Writing caps from docs/LESSONS.md: warnings, not failures.
    if (s.p && sentences(s.p) > 2) warn(L, `${at}: paragraph has ${sentences(s.p)} sentences (cap 2)`);
    if (s.t && (s.t[0].length > 4 || s.t.length > 7)) warn(L, `${at}: table is ${s.t[0].length} x ${s.t.length - 1} (cap 4 columns x 6 rows)`);
    if (s.ex && s.ex.length > 4) warn(L, `${at}: ${s.ex.length} examples (cap 4)`);
    if (s.t) { const w = s.t[0].length; s.t.forEach((r, j) => { if (r.length !== w) bad(L, `${at} table row ${j} has ${r.length} cells, header has ${w}`); }); }
    (s.ex || []).forEach((e, j) => { if (e.length !== 2) bad(L, `slide ${i + 1} example ${j + 1} needs [korean, english]`); });
  });
  (L.vocab || []).forEach((v, i) => { if (v.length !== 2 || !v[0] || !v[1]) bad(L, `vocab ${i + 1} needs [korean, english]`); });
  (L.plan || []).forEach((p, i) => { if (p.length !== 3 || isNaN(+p[0])) bad(L, `plan row ${i + 1} needs ["minutes", title, text]`); });
  const items = [...(L.ex || []).map(x => ['ex', x]), ...(L.pool || []).map(x => ['pool', x])];
  items.forEach(([where, it], i) => {
    const tag = `${where} item ${i + 1} (${it.q})`;
    if (!it.q) bad(L, `${tag}: no q`);
    markup(L, tag, it.why);
    if (it.k === 'mc') {
      if (!Array.isArray(it.c) || it.c.length < 2) bad(L, `${tag}: needs c with the right answer first`);
      else if (new Set(it.c).size !== it.c.length) bad(L, `${tag}: duplicate choices`);
      if (!it.why) bad(L, `${tag}: no why`);
    } else if (it.k === 'build') {
      if (!Array.isArray(it.ok) || !it.ok.length) { bad(L, `${tag}: needs ok[]`); return; }
      const tiles = it.ok[0].split(' ').concat(it.x || []);
      it.ok.forEach(s => {
        const pool = [...tiles];
        for (const w of s.split(' ')) { const k = pool.indexOf(w); if (k < 0) { bad(L, `${tag}: "${s}" uses "${w}", which isn't a tile`); break; } pool.splice(k, 1); }
      });
    } else bad(L, `${tag}: unknown kind "${it.k}"`);
  });
  if (L.pool && !(L.poolN > 0)) bad(L, 'has pool but no poolN');
  // Say it: {en, ko (polite), ban (반말), alt?, banAlt?, hint?}. Endings are checked roughly here;
  // tools/kiwi_check.py does the real morpheme check.
  if (L.say !== undefined) {
    if (!Array.isArray(L.say) || !L.say.length) bad(L, 'say must be a non-empty array');
    const seen = new Set();
    const end = s => strip(s).replace(/[.?!…"'\s]+$/, '');
    const politeEnd = /(요|죠|니다|니까|시오)$/;
    (Array.isArray(L.say) ? L.say : []).forEach((it, i) => {
      const tag = `say ${i + 1} (${it && it.en})`;
      for (const f of ['en', 'ko', 'ban']) if (typeof it[f] !== 'string' || !it[f].trim()) bad(L, `${tag}: missing ${f}`);
      for (const f of ['alt', 'banAlt']) if (it[f] !== undefined && (!Array.isArray(it[f]) || !it[f].every(x => typeof x === 'string' && x.trim()))) bad(L, `${tag}: ${f} must be an array of strings`);
      for (const k of Object.keys(it)) if (!['en', 'ko', 'ban', 'alt', 'banAlt', 'hint', 'note'].includes(k)) bad(L, `${tag}: unknown field "${k}"`);
      if (seen.has(it.en)) bad(L, `${tag}: duplicate English sentence`); seen.add(it.en);
      if (/[가-힣]/.test(it.en || '')) bad(L, `${tag}: en should be English`);
      ['ko', 'ban', 'hint', 'note'].forEach(f => markup(L, tag, it[f]));
      [].concat(it.ko || [], it.alt || []).forEach(s => { const e = end(s), pre = end(e.replace(/,[^,]*$/, "")); if (!politeEnd.test(e) && !(e.includes(",") && politeEnd.test(pre))) bad(L, `${tag}: polite answer "${s}" doesn't end in 요 or 니다`); });
      [].concat(it.ban || [], it.banAlt || []).forEach(s => { if (/(요|죠|니다|니까)$/.test(end(s))) bad(L, `${tag}: 반말 answer "${s}" ends like polite speech`); });
      if (it.ko && it.ban && strip(it.ko) === strip(it.ban)) bad(L, `${tag}: ko and ban are the same`);
      [it.alt, it.banAlt].forEach(a => (a || []).forEach(x => { if (/[\[\]]/.test(x)) bad(L, `${tag}: alternatives are shown plain, so leave out [ ] markup`); }));
    });
  }
  // Dialogue: {scene, cast:[[name, "yo"|"ban", english?]], lines:[[name, korean, english, level?]], clean?:[same], q?:[mc + cwhy?], note?}.
  // Endings are checked roughly per sentence here; tools/kiwi_check.py does the real check.
  if (L.dlg !== undefined) {
    const scenes = [].concat(L.dlg);
    if (!scenes.length) bad(L, 'dlg: no scenes');
    scenes.forEach((D, si) => {
    const tag = scenes.length > 1 ? `dlg scene ${si + 1}` : 'dlg';
    if (scenes.length > 1 && !(D && typeof D.title === 'string' && D.title.trim())) bad(L, `${tag}: needs a title when a lesson has more than one scene`);
    if (!D || typeof D !== 'object' || Array.isArray(D)) bad(L, 'dlg must be an object');
    else {
      for (const k of Object.keys(D)) if (!['title', 'scene', 'cast', 'lines', 'clean', 'q', 'note'].includes(k)) bad(L, `${tag}: unknown field "${k}"`);
      if (typeof D.scene !== 'string' || !D.scene.trim()) bad(L, `${tag}: missing scene`);
      markup(L, tag, D.scene);
      const cast = Array.isArray(D.cast) ? D.cast : [];
      if (cast.length < 2 || cast.length > 3) bad(L, `${tag}: cast needs 2 or 3 speakers`);
      const names = cast.map(c => Array.isArray(c) ? c[0] : undefined);
      cast.forEach((c, i) => {
        if (!Array.isArray(c) || typeof c[0] !== 'string' || !c[0] || !['yo', 'ban'].includes(c[1]) || c.length > 3) bad(L, `${tag}: cast ${i + 1} needs [name, "yo" or "ban", english?]`);
      });
      if (new Set(names).size !== names.length) bad(L, `${tag}: a name appears twice in cast`);
      const end = s => s.replace(/[.?!…"'\s]+$/, '');
      const sentencesOf = s => strip(s).split(/(?<=[.?!…])\s+/).map(x => x.trim()).filter(Boolean);
      // lines is the As-spoken script; clean (optional) is the same scene in full sentences. Both get the same checks.
      if (D.clean !== undefined && (!Array.isArray(D.clean) || !D.clean.length)) bad(L, `${tag}: clean must be a non-empty array of lines`);
      [['lines', D.lines], ...(Array.isArray(D.clean) && D.clean.length ? [['clean', D.clean]] : [])].forEach(([field, arr]) => {
      const lines = Array.isArray(arr) ? arr : [], pre = field === 'clean' ? `${tag} clean` : tag;
      if (lines.length < 4) bad(L, `${pre}: needs at least 4 lines`);
      if (lines.length && (lines.length < 6 || lines.length > 10)) warn(L, `${pre}: ${lines.length} lines (aim for 6 to 10)`);
      lines.forEach((l, i) => {
        const at = `${pre} line ${i + 1}`;
        if (!Array.isArray(l) || l.length < 3 || l.length > 4) { bad(L, `${at}: needs [name, korean, english, level?]`); return; }
        const [who, ko, en, lv] = l;
        const c = cast.find(x => Array.isArray(x) && x[0] === who);
        if (!c) { bad(L, `${at}: "${who}" isn't in cast`); return; }
        if (typeof ko !== 'string' || !/[가-힣]/.test(ko)) bad(L, `${at}: missing Korean`);
        if (typeof en !== 'string' || !en.trim() || /[가-힣]/.test(en)) bad(L, `${at}: english missing or has Korean in it (romanize names: Minsu, Jieun)`);
        if (lv !== undefined && !['yo', 'ban'].includes(lv)) bad(L, `${at}: level must be "yo" or "ban"`);
        if (lv !== undefined && lv === c[1]) bad(L, `${at}: level "${lv}" is already ${who}'s default; leave it off`);
        markup(L, at, ko);
        const level = lv || c[1];
        if (typeof ko === 'string') sentencesOf(ko).forEach(s => {
          const e = end(s);
          if (level === 'yo' && !/(요|죠|니다|니까|시오)$/.test(e) && /\s/.test(e) && !/(씨|님)$/.test(e)) bad(L, `${at}: polite line "${s}" doesn't end in 요 or 니다`);
          if (level === 'ban' && /(요|죠|니다)$/.test(e)) bad(L, `${at}: 반말 line "${s}" ends like polite speech`);
        });
      });
      const spoke = new Set(lines.map(l => Array.isArray(l) && l[0]));
      names.forEach(n => { if (n && !spoke.has(n)) bad(L, `${pre}: ${n} is in cast but has no lines`); });
      });
      if (D.q !== undefined) {
        if (!Array.isArray(D.q) || !D.q.length) bad(L, `${tag}: q must be a non-empty array`);
        (Array.isArray(D.q) ? D.q : []).forEach((x, i) => {
          const at = `${tag} question ${i + 1}`;
          if (!x || typeof x.q !== 'string' || !x.q) { bad(L, `${at}: no q`); return; }
          if (!Array.isArray(x.c) || x.c.length < 2) bad(L, `${at}: needs c with the right answer first`);
          else if (new Set(x.c).size !== x.c.length) bad(L, `${at}: duplicate choices`);
          if (!x.why) bad(L, `${at}: no why`);
          for (const k of Object.keys(x)) if (!['q', 'c', 'why', 'cwhy'].includes(k)) bad(L, `${at}: unknown field "${k}"`);
          if (x.cwhy !== undefined && (typeof x.cwhy !== 'string' || !x.cwhy || D.clean === undefined)) bad(L, `${at}: cwhy must be a string, and only with a clean script`);
          markup(L, at, x.why);
          if (typeof x.cwhy === 'string') markup(L, at, x.cwhy);
        });
      }
      if (D.note !== undefined) [].concat(D.note).forEach(n => { if (typeof n !== 'string' || !n) bad(L, `${tag}: note must be a string or an array of strings`); else markup(L, tag, n); });
    }
    });
  }
  (L.goals || []).forEach(g => markup(L, 'goals', g));
  (L.plan || []).forEach(p => markup(L, 'plan', p[2]));
}

// --dump-say prints every say item as JSON (tools/kiwi_check.py reads it) and skips the report.
if (process.argv.includes('--dump-say')) {
  process.stdout.write(JSON.stringify(LESSONS.flatMap(L => (L.say || []).map((it, i) => ({ lesson: L.id, n: i + 1, ...it, ko: strip(it.ko), ban: strip(it.ban) })))));
  process.exit(errs.length ? 1 : 0);
}
// --dump-dlg prints every dialogue line as JSON, with its speech level resolved. Clean-script lines have n like "c3".
if (process.argv.includes('--dump-dlg')) {
// Lines from the second scene on have n like "s2-3" or "s2-c3".
  const rows = (L, D, arr, p) => (arr || []).map((l, i) => ({ lesson: L.id, n: p + (i + 1), who: l[0], ko: strip(l[1]), en: l[2], lv: l[3] || (D.cast.find(c => c[0] === l[0]) || [])[1] }));
  process.stdout.write(JSON.stringify(LESSONS.flatMap(L => [].concat(L.dlg || []).flatMap((D, si) => { const s = si ? `s${si + 1}-` : ''; return [...rows(L, D, D.lines, s), ...rows(L, D, D.clean, s + 'c')]; }))));
  process.exit(errs.length ? 1 : 0);
}
if (warns.length && process.argv.includes('--style')) console.log(warns.map(w => 'style: ' + w).join('\n') + '\n');
else if (warns.length) console.log(`${warns.length} style note(s); run with --style to list them.`);
if (errs.length) { console.error(errs.join('\n')); console.error(`\n${errs.length} problem(s).`); process.exit(1); }
console.log(`OK: ${LESSONS.length} lessons, ${LESSONS.reduce((n, L) => n + L.ex.length + (L.pool || []).length, 0)} practice items, ${LESSONS.reduce((n, L) => n + (L.say || []).length, 0)} say-it sentences, ${LESSONS.reduce((n, L) => n + [].concat(L.dlg || []).length, 0)} dialogue scenes.`);
