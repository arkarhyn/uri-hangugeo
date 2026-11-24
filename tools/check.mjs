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
    const politeEnd = /(요|니다|니까|시오)$/;
    (Array.isArray(L.say) ? L.say : []).forEach((it, i) => {
      const tag = `say ${i + 1} (${it && it.en})`;
      for (const f of ['en', 'ko', 'ban']) if (typeof it[f] !== 'string' || !it[f].trim()) bad(L, `${tag}: missing ${f}`);
      for (const f of ['alt', 'banAlt']) if (it[f] !== undefined && (!Array.isArray(it[f]) || !it[f].every(x => typeof x === 'string' && x.trim()))) bad(L, `${tag}: ${f} must be an array of strings`);
      for (const k of Object.keys(it)) if (!['en', 'ko', 'ban', 'alt', 'banAlt', 'hint', 'note'].includes(k)) bad(L, `${tag}: unknown field "${k}"`);
      if (seen.has(it.en)) bad(L, `${tag}: duplicate English sentence`); seen.add(it.en);
      if (/[가-힣]/.test(it.en || '')) bad(L, `${tag}: en should be English`);
      ['ko', 'ban', 'hint', 'note'].forEach(f => markup(L, tag, it[f]));
      [].concat(it.ko || [], it.alt || []).forEach(s => { if (!politeEnd.test(end(s))) bad(L, `${tag}: polite answer "${s}" doesn't end in 요 or 니다`); });
      [].concat(it.ban || [], it.banAlt || []).forEach(s => { if (/(요|니다|니까)$/.test(end(s))) bad(L, `${tag}: 반말 answer "${s}" ends like polite speech`); });
      if (it.ko && it.ban && strip(it.ko) === strip(it.ban)) bad(L, `${tag}: ko and ban are the same`);
      [it.alt, it.banAlt].forEach(a => (a || []).forEach(x => { if (/[\[\]]/.test(x)) bad(L, `${tag}: alternatives are shown plain, so leave out [ ] markup`); }));
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
if (warns.length && process.argv.includes('--style')) console.log(warns.map(w => 'style: ' + w).join('\n') + '\n');
else if (warns.length) console.log(`${warns.length} style note(s); run with --style to list them.`);
if (errs.length) { console.error(errs.join('\n')); console.error(`\n${errs.length} problem(s).`); process.exit(1); }
console.log(`OK: ${LESSONS.length} lessons, ${LESSONS.reduce((n, L) => n + L.ex.length + (L.pool || []).length, 0)} practice items, ${LESSONS.reduce((n, L) => n + (L.say || []).length, 0)} say-it sentences.`);
