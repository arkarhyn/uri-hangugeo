"""Checks the Korean in every lesson's Say-it sentences with the Kiwi analyzer.

Run from the repo root with any Python that has kiwipiepy installed, e.g. the
korean-reader venv:
    <python> -I tools/kiwi_check.py            problems and notes only
    <python> -I tools/kiwi_check.py --all      also print each sentence's morphemes
    <python> -I tools/kiwi_check.py past if    only these lesson ids

What it catches (mechanical mistakes, not naturalness):
  - a polite answer (ko, alt) whose final ending isn't polite (-요, -니다, -니까, -시오)
  - a 반말 answer (ban, banAlt) whose final ending is polite
  - forms Kiwi doesn't recognise, and pre-final endings outside the usual set
    (a misspelling like 잣어요 shows up as an odd 엇)
It also notes when the polite and 반말 versions use different content words,
which usually means one of them drifted from the English.
Exit code 1 if there's a problem; notes alone don't fail.
"""
import json
import os
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8")
from kiwipiepy import Kiwi  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
args = [a for a in sys.argv[1:] if not a.startswith("--")]
show_all = "--all" in sys.argv

out = subprocess.run(["node", os.path.join(ROOT, "tools", "check.mjs"), "--dump-say"],
                     capture_output=True, text=True, encoding="utf-8", cwd=ROOT)
if out.returncode:
    print(out.stderr or out.stdout)
    sys.exit("Fix the checker errors first (node tools/check.mjs).")
items = [x for x in json.loads(out.stdout) if not args or x["lesson"] in args]

kiwi = Kiwi()
POLITE = ("요", "니다", "니까", "시오")
KNOWN_EP = {"었", "았", "였", "시", "으시", "겠", "었었", "았었", "더"}
CONTENT = ("NNG", "NNP", "VV", "VA", "MAG", "VX", "XR")
# Words that are meant to change between the two speech levels.
LEVEL_SWAP = {"저", "나", "제", "내", "저희", "우리", "네", "응", "아니요", "아니", "드리", "주"}


def final_ending(toks):
    for t in reversed(toks):
        if t.tag in ("EF", "JX", "EC"):
            return t
        if not t.tag.startswith("S"):
            return t
    return None


def content(toks):
    return {t.form for t in toks if t.tag.split("-")[0] in CONTENT and t.form not in LEVEL_SWAP}


problems, notes = [], []
for it in items:
    where = f'{it["lesson"]} say {it["n"]} ("{it["en"]}")'
    level = {"ko": [it["ko"], *it.get("alt", [])], "ban": [it["ban"], *it.get("banAlt", [])]}
    parsed = {}
    for lv, sents in level.items():
        for s in sents:
            toks = kiwi.tokenize(s)
            parsed.setdefault(lv, []).append(toks)
            morph = " ".join(f"{t.form}/{t.tag}" for t in toks)
            if show_all:
                print(f"{where} [{lv}] {s}\n    {morph}")
            end = final_ending(toks)
            polite = end is not None and end.form.endswith(POLITE)
            if lv == "ko" and not polite:
                problems.append(f"{where}: polite answer {s} ends in {end.form if end else '?'}/{end.tag if end else '?'}, not a polite ending\n    {morph}")
            if lv == "ban" and polite:
                problems.append(f"{where}: 반말 answer {s} ends in polite {end.form}\n    {morph}")
            for t in toks:
                if t.tag in ("UN", "NA") or t.tag.startswith("W_") or t.tag == "SL":
                    problems.append(f"{where}: Kiwi doesn't recognise \"{t.form}\" ({t.tag}) in {s}\n    {morph}")
                if t.tag == "EP" and t.form not in KNOWN_EP:
                    problems.append(f"{where}: unusual pre-final ending \"{t.form}\" in {s}: check the spelling\n    {morph}")
    a, b = content(parsed["ko"][0]), content(parsed["ban"][0])
    if a != b:
        notes.append(f"{where}: content words differ between levels: polite only {sorted(a - b) or '-'}, 반말 only {sorted(b - a) or '-'}")

for p in problems:
    print("PROBLEM", p)
for n in notes:
    print("note   ", n)
print(f"\n{len(items)} sentences checked: {len(problems)} problem(s), {len(notes)} note(s).")
sys.exit(1 if problems else 0)
