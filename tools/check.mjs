// Lesson checker: node tools/check.mjs
// Loads the SRC map and LESSONS array out of index.html and checks their shape.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const start = html.indexOf('const HT = ');
const end = html.indexOf('const LMAP');
if (start < 0 || end < 0) { console.error('Could not find SRC/LESSONS in index.html'); process.exit(1); }
const { SRC, LESSONS } = new Function(html.slice(start, end) + '\nreturn {SRC, LESSONS};')();

const errs = [];
const bad = (L, msg) => errs.push(`${L.id || '?'}: ${msg}`);
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
    if (!s.p && !s.t && !s.ex) bad(L, `slide ${i + 1} is empty`);
    if (s.t) { const w = s.t[0].length; s.t.forEach((r, j) => { if (r.length !== w) bad(L, `slide ${i + 1} table row ${j} has ${r.length} cells, header has ${w}`); }); }
    (s.ex || []).forEach((e, j) => { if (e.length !== 2) bad(L, `slide ${i + 1} example ${j + 1} needs [korean, english]`); });
  });
  (L.vocab || []).forEach((v, i) => { if (v.length !== 2 || !v[0] || !v[1]) bad(L, `vocab ${i + 1} needs [korean, english]`); });
  (L.plan || []).forEach((p, i) => { if (p.length !== 3 || isNaN(+p[0])) bad(L, `plan row ${i + 1} needs ["minutes", title, text]`); });
  const items = [...(L.ex || []).map(x => ['ex', x]), ...(L.pool || []).map(x => ['pool', x])];
  items.forEach(([where, it], i) => {
    const tag = `${where} item ${i + 1} (${it.q})`;
    if (!it.q) bad(L, `${tag}: no q`);
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
}

if (errs.length) { console.error(errs.join('\n')); console.error(`\n${errs.length} problem(s).`); process.exit(1); }
console.log(`OK: ${LESSONS.length} lessons, ${LESSONS.reduce((n, L) => n + L.ex.length + (L.pool || []).length, 0)} practice items.`);
