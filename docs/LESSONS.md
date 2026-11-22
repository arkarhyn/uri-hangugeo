# How to add a lesson

Every lesson is one object in the `LESSONS` array in `index.html`. The page builds the slides, Words tab, flashcards, Practice quiz and lesson plan from that object, so adding a lesson means adding data, not code. Nothing else has to change: the progress Sheet accepts any new lesson id.

## The routine

1. **Pick the topic.** The next ones are listed in `docs/PLAN.md` §6.1. Check what earlier lessons already teach (search `index.html` for the grammar point) so the new one builds on them instead of repeating them.
2. **Write the lesson object** (shape below). Write the explanations and example sentences fresh. Use How to Study Korean (HTSK) only to check what to cover and to link to it, and never copy its sentences.
3. **Add the HTSK link** to `SRC` near the top of the script if it isn't there yet, then list its key in the lesson's `src`.
4. **Run the checker:** `node tools/check.mjs`. It loads every lesson and reports missing fields, duplicate ids, unknown `src` keys, mismatched table rows, duplicate quiz choices, and build answers that can't be made from their tiles.
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
| `p` | A paragraph of explanation. |
| `t` | A table: an array of rows, where the first row is the header. Every row needs the same number of cells. |
| `ex` | Example pairs `[korean, english]`. Each gets a speak button. |
| `note` | A highlighted side note, used for exceptions and links back to earlier lessons. |

Square brackets highlight the part being taught: `"지금 밥 먹[고 있어요]."`. Highlighting works in `h`, `p`, `t`, `note` and the Korean half of `ex`.

### Practice items

- **Multiple choice:** `{k:"mc", q:"prompt", c:[correct, wrong, wrong, wrong], why:"short reason"}`. The correct answer is always first; the page shuffles the choices. Optional `sub` adds a smaller line under the prompt, and `svg` puts a picture above it. Make sure no "wrong" choice is also a correct answer to the prompt as worded. That's the most common bug.
- **Sentence builder:** `{k:"build", q:"English prompt", ok:["accepted sentence", "another accepted order"], x:["extra wrong tile"]}`. The tiles are the words of `ok[0]` plus `x`, so every other accepted sentence must use only those words. Answers can end in `?` if `ok[0]` does, because the `?` is part of the last tile.

Aim for about 12 multiple-choice items and 2 builders in `ex`, plus 6 to 9 in `pool` with `poolN` of 3 or 4.

## Conventions

- Refer back to earlier lessons by name: "Review 2" for unit 1 lessons, "the linking lesson" for unit 2.
- Use only grammar that's already been taught in examples and drills. Leave irregular verbs (ㅂ, ㄷ, 르, ㅡ, ㄹ) out of drills until the irregulars lesson exists.
- Keep the lesson plan to about 30 minutes, ending with "Check: Practice tab."
- Mark wrong examples with ✗ and right ones with ✓ inside the `ex` English.

## What later features will change

Phase 2 in `docs/PLAN.md` plans to move each lesson into its own file. The object shape above stays the same, so moving existing lessons is a copy, not a rewrite. New features such as a reviewed tag or generated drills would be optional fields; lessons without them keep working.
