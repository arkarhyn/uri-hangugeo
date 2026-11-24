# How to add a lesson

Every lesson is one file in `lessons/`, named by unit and position (`u2-14-purpose.js`), holding one `LESSONS.push({...});` call. The page builds the slides, Words tab, flashcards, Practice quiz and lesson plan from that object, so adding a lesson means adding data, not code. Nothing else has to change: the progress Sheet accepts any new lesson id.

## The routine

1. **Pick the topic.** The next ones are listed in `docs/PLAN.md` §6.1. Check what earlier lessons already teach (search `lessons/` for the grammar point) so the new one builds on them instead of repeating them.
2. **Write the lesson file** (shape below). Copy an existing file in `lessons/` and add a `<script src="lessons/...">` line for it in `index.html`, after the lesson it follows. Script order is teaching order. The checker fails if a lesson file has no script line. Write the explanations and example sentences fresh. Use How to Study Korean (HTSK) only to check what to cover and to link to it, and never copy its sentences.
3. **Add the HTSK link** to `SRC` in `lessons/sources.js` if it isn't there yet, then list its key in the lesson's `src`.
4. **Run the checker:** `node tools/check.mjs`. It loads every lesson and reports missing fields, duplicate ids, unknown `src` keys, mismatched table rows, duplicate quiz choices, build answers that can't be made from their tiles, and broken bracket markup (unbalanced brackets, unknown roles like `[q:]`, misspelled note labels, short `steps` chains). `node tools/check.mjs --style` also lists slides over the size caps in the writing rules below. Those are warnings, not failures.
5. **Get a Korean review.** Ask Claude for a separate reviewer pass on every sentence, and read it yourself. The checker can't tell whether the Korean is right.
6. **Preview:** double-click `index.html`. For a phone test on the same Wi-Fi, run `python -m http.server` in the repo and open `http://<pc-ip>:8000`.
7. **Commit and push to `main`.** GitHub Pages updates in a few minutes. Commit as the repo-local noreply address, never a personal email (the repo is public).

## Lesson shape

```js
{
  id:"ing",                 // lowercase letters, digits, dashes; 2-24 chars. Never rename later:
                            // the Sheet logs scores by id.
  unit:2,                   // 2 = New lessons (shown first). Leave it off for unit 1 (Review from class).
  ko:"하고 있어요",          // short Korean label on the lesson card
  title:"What you're doing right now",
  blurb:"One sentence on what this lesson lets you say.",
  src:["L18"],              // keys into SRC (HTSK links shown on the lesson)
  goals:["Can-do statement", "..."],
  slides:[ /* see below */ ],
  vocab:[["요즘","these days"], ...],            // Words tab and flashcards
  ex:[ /* practice items, always asked */ ],
  pool:[ /* optional extra items */ ], poolN:3,  // poolN random pool items are added to each run
  plan:[["5","Warm-up","What to do"], ...],      // [minutes, title, instructions]
  talk:[["요즘 뭐 배우고 있어요?","What are you learning these days?"], ...],  // conversation prompts
  after:"Where to read more (usually the HTSK lesson)."
}
```

### Slides

Each slide has a heading `h` plus any mix of the fields below, rendered in this order:

| Field | What it is |
|---|---|
| `steps` | Change chains, drawn as boxes joined by arrows (stacked downward on a phone). An array of chains, each an array of 2 or more strings: `steps:[["[s:춥] + [e:어요]","[s:추][c:우] + [e:어요]","[s:추][c:워][e:요]"]]`. The last box gets a speak button. It comes first on the slide, so the worked example leads and the rule in `p` follows. |
| `p` | A paragraph of explanation. |
| `t` | A table: an array of rows, where the first row is the header. Every row needs the same number of cells. |
| `ex` | Example pairs `[korean, english]`. Each gets a speak button. |
| `note` | A side note, or an array of them. Start it with `Watch out: ` for an exception you'll actually hit (stronger orange box) or `See also: ` for a link back to another lesson (quiet box). Anything else gets the plain green box. |

**Highlighting.** Square brackets highlight the part being taught: `"지금 밥 먹[고 있어요]."` (yellow). It works in `h`, `p`, `t`, `note`, `steps`, the Korean half of `ex`, goals, plan text and quiz `why`.

**Word-part colours.** For grammar that happens inside a word, give the bracket a role:

| Markup | Role | Looks like |
|---|---|---|
| `[s:바]` | stem | blue, underlined |
| `[e:아요]` | ending | orange, bold |
| `[c:빠]` | the part that changed | pink box |
| `[x:ㅡ]` | a dropped part | grey, struck through, dashed box (left out of the audio) |

A syllable that merges stem and ending (빠 in 바빠요, 워 in 추워요, 듭 in 만듭니다) counts as changed. Each slide that uses roles shows a one-line key in its top corner automatically. Use the full colouring in chains and tables; in example sentences mark only the changed part (`오늘 너무 바[c:빠]요.`) or only the ending being taught (`바쁘[e:고] 피곤해요.`), so sentences stay readable.

### Writing rules

These come from the review of batches 1 to 3 (dual coding and signalling: show the change, and make the important part stand out).

- **Slide order:** a concrete example first (a change chain, or a heading that shows the form), then the rule in one sentence, then the table, then 3 or 4 examples.
- **Size caps:** paragraphs of 2 sentences at most, tables of at most 4 columns and 6 rows, and at most 4 examples per slide. About 6 to 8 slides per lesson. The checker's `--style` flag lists anything over.
- **Notes:** `Watch out:` for exceptions, `See also:` for links back. Don't bury an exception in a plain note.
- **Quizzes match how the slide taught.** If a slide shows a change, at least two questions ask the learner to produce that change. Put the coloured form in the `why` so the feedback shows it the way the slide did.
- **Flashcards for irregular verbs show the hard form:** `["춥다 → 추워요","to be cold"]`. Mark a look-alike that doesn't change: `["입다 → 입어요","to wear (doesn't change)"]`.
- **Plain look:** no emoji or pictures on slides. Colour carries the structure.

### Practice items

- **Multiple choice:** `{k:"mc", q:"prompt", c:[correct, wrong, wrong, wrong], why:"short reason"}`. The correct answer is always first; the page shuffles the choices. Optional `sub` adds a smaller line under the prompt, and `svg` puts a picture above it. Make sure no "wrong" choice is also a correct answer to the prompt as worded. That's the most common bug.
- **Sentence builder:** `{k:"build", q:"English prompt", ok:["accepted sentence", "another accepted order"], x:["extra wrong tile"]}`. The tiles are the words of `ok[0]` plus `x`, so every other accepted sentence must use only those words. Answers can end in `?` if `ok[0]` does, because the `?` is part of the last tile.

Aim for about 12 multiple-choice items and 2 builders in `ex`, plus 6 to 9 in `pool` with `poolN` of 3 or 4.

## Conventions

- Refer back to earlier lessons by name: "Review 2" for unit 1 lessons, "the linking lesson" for unit 2.
- Use only grammar that's already been taught in examples and drills. Irregular verbs (ㅡ, ㄹ, ㅂ, ㄷ, 르) are taught in `irregulars1` and `irregulars2`, so lessons after them can use irregulars in drills. ㅅ and ㅎ irregulars aren't taught yet.
- Keep the lesson plan to about 30 minutes, ending with "Check: Practice tab."
- Mark wrong examples with ✗ and right ones with ✓ inside the `ex` English.

## What later features will change

Phase 2 in `docs/PLAN.md` plans to move each lesson into its own file. The object shape above stays the same, so moving existing lessons is a copy, not a rewrite. New features such as a reviewed tag or generated drills would be optional fields; lessons without them keep working.
