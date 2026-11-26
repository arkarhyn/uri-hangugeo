"""Checks the Korean in every lesson's Say-it sentences and dialogue lines with the Kiwi analyzer.

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
Dialogue lines are checked against their speech level (the speaker's, or the
line's own when it switches): every ending in a polite line must be polite, and
none in a 반말 line may be.
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

def dump(flag):
    out = subprocess.run(["node", os.path.join(ROOT, "tools", "check.mjs"), flag],
                         capture_output=True, text=True, encoding="utf-8", cwd=ROOT)
    if out.returncode:
        print(out.stderr or out.stdout)
        sys.exit("Fix the checker errors first (node tools/check.mjs).")
    return [x for x in json.loads(out.stdout) if not args or x["lesson"] in args]


items = dump("--dump-say")
dlg_lines = dump("--dump-dlg")

kiwi = Kiwi()
POLITE = ("요", "죠", "니다", "니까", "시오")
KNOWN_EP = {"었", "았", "였", "시", "으시", "겠", "었었", "았었", "더"}
CONTENT = ("NNG", "NNP", "VV", "VA", "MAG", "VX", "XR")
# Words that are meant to change between the two speech levels.
LEVEL_SWAP = {"저", "나", "제", "내", "저희", "우리", "네", "응", "아니요", "아니", "드리", "주"}


def final_ending(toks):
    # An afterthought after the last comma (진짜 맛있어요, 이거.) has no ending of its own:
    # judge the ending before that comma instead.
    commas = [i for i, t in enumerate(toks) if t.tag == "SP" and t.form == ","]
    if commas and not any(t.tag.startswith("E") for t in toks[commas[-1]:]):
        return final_ending(toks[:commas[-1]])

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

# Dialogue lines: every sentence ending (EF) in a polite line must be polite, and none in a 반말 line may be.
# Fragments with no ending at all (응. 나도. 민수야!) aren't judged, except a 반말 fragment ending in 요.
BAN_BAD = ("요", "죠", "니다", "ᆸ니까", "습니까")
for ln in dlg_lines:
    s, lv = ln["ko"], ln["lv"]
    where = f'{ln["lesson"]} dialogue line {ln["n"]} ({ln["who"]}, {"polite" if lv == "yo" else "반말"})'
    toks = kiwi.tokenize(s)
    morph = " ".join(f"{t.form}/{t.tag}" for t in toks)
    if show_all:
        print(f"{where} {s}\n    {morph}")
    for t in toks:
        if t.tag == "EF" and lv == "yo" and not t.form.endswith(POLITE):
            problems.append(f"{where}: polite line {s} has the 반말 ending {t.form}\n    {morph}")
        # Before a comma Kiwi tags the ending EC (고마워요, 민수 씨), so a 요 there counts too.
        if lv == "ban" and (t.tag == "EF" and t.form.endswith(BAN_BAD) or t.tag in ("JX", "EC") and t.form.endswith("요")):
            problems.append(f"{where}: 반말 line {s} has the polite ending {t.form}\n    {morph}")
        if t.tag in ("UN", "NA") or t.tag.startswith("W_") or t.tag == "SL":
            problems.append(f"{where}: Kiwi doesn't recognise \"{t.form}\" ({t.tag}) in {s}\n    {morph}")
        if t.tag == "EP" and t.form not in KNOWN_EP:
            problems.append(f"{where}: unusual pre-final ending \"{t.form}\" in {s}: check the spelling\n    {morph}")

for p in problems:
    print("PROBLEM", p)
for n in notes:
    print("note   ", n)
print(f"\n{len(items)} sentences and {len(dlg_lines)} dialogue lines checked: {len(problems)} problem(s), {len(notes)} note(s).")
sys.exit(1 if problems else 0)
