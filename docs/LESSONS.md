# How to add a lesson

Every lesson is one file in `lessons/`, named by unit and position (`u2-14-purpose.js`), holding one `LESSONS.push({...});` call. The page builds the slides, Words tab, flashcards, Practice quiz and lesson plan from that object, so adding a lesson means adding data, not code. Nothing else has to change: the progress Sheet accepts any new lesson id.

## The routine

1. **Pick the topic.** The next ones are listed in `docs/PLAN.md` §6.1. Check what earlier lessons already teach (search `lessons/` for the grammar point) so the new one builds on them instead of repeating them.
2. **Write the lesson file** (shape below). Copy an existing file in `lessons/` and add a `<script src="lessons/...">` line for it in `index.html`, after the lesson it follows. Script order is teaching order. The checker fails if a lesson file has no script line. Write the explanations and example sentences fresh. Use How to Study Korean (HTSK) only to check what to cover and to link to it, and never copy its sentences.
3. **Add the HTSK link** to `SRC` in `lessons/sources.js` if it isn't there yet, then list its key in the lesson's `src`.
4. **Run the checker:** `node tools/check.mjs`. It loads every lesson and reports missing fields, duplicate ids, unknown `src` keys, mismatched table rows, duplicate quiz choices, build answers that can't be made from their tiles, and broken bracket markup (unbalanced brackets, unknown roles like `[q:]`, misspelled note labels, short `steps` chains). `node tools/check.mjs --style` also lists slides over the size caps in the writing rules below. Those are warnings, not failures.
5. **Check the Korean.** Neither of us is a native speaker, so it's three layers:
   - `tools/kiwi_check.py` runs the Kiwi analyzer on every Say-it sentence. It fails when a polite answer doesn't end politely, a 반말 answer does, or Kiwi doesn't recognise a form (a misspelling like 잣어요 shows up this way). It also notes when the polite and 반말 versions use different content words. Run it with the korean-reader venv: `C:\dev\korean-reader\server\.venv\Scripts\python.exe -I tools/kiwi_check.py` (add lesson ids to check only those, `--all` to print every analysis).
   - Two separate Claude reviewer passes, neither by whoever wrote the sentences: one for grammar, one for "would a Korean person actually say this?". Read both yourself.
   - Keep sentences short and everyday. Plain Korean is easier to get right than clever Korean.
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
  say:[ /* optional: Say it in Korean sentences, see below */ ],
  dlg:{ /* optional: a model conversation, see below */ },
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

### Say it in Korean

The Say it tab shows English; you say it out loud in Korean, reveal, and rate yourself Got it / Close / Missed it. Ratings stay on the device and send close or missed sentences back first in the Say-it Gym (`#say`).

```js
say:[
  {en:"I couldn't sleep last night.", ko:"어젯밤에 [못] 잤어요.", ban:"어젯밤에 [못] 잤어.",
   alt:["어젯밤에 잠을 못 잤어요."], banAlt:["어젯밤에 잠을 못 잤어."], hint:"못 + past"},
  ...
]
```

- `en` is the prompt. `ko` is the 해요 answer and `ban` the 반말 answer; both are required, because a switch picks which one you're asked for. Highlight the lesson's grammar with the usual bracket markup, and use `[c:]` for a word that changes in 반말 (제 → `[c:내]`).
- `alt` / `banAlt` are other answers that are just as right, shown as "Also fine". Plain text, no markup.
- `note` is optional and shows after the reveal. Use it for who you can say it to ("With a clerk, always 주세요. 줘 is for a friend."), so neither level gets copied into the wrong situation.
- `hint` is optional and shows before the reveal. Keep it level-neutral ("안 goes right before the verb", not "...before 했어요").
- **6 to 8 per lesson, short to long.** The first few use only the new grammar in a short sentence. The last two or three join it with grammar from earlier lessons, so stringing sentences together comes gradually.
- Only grammar already taught, everyday topics, nothing personal (the repo is public). The recurring people are 민수 and 지은, friends who use 반말 with each other and polite speech with elders and strangers.
- Add a "Say it" row to the lesson plan.

### Dialogue

The Dialogue tab shows one or more short scenes that use the lesson's grammar the way people actually talk. It has three modes. **Read** shows the script, with Play all reading every line in each speaker's voice. **Role-play** shows the lines of the parts you pick as English only, until you've said them and pressed Show; pick both 민수 and 지은 when you're together. **Listen first** hides the Korean, plays it, then asks the questions. Nothing is scored or sent to the Sheet.

A lesson with one scene sets `dlg` to that object. For several, set `dlg` to an array of them and give each a `title` (2 to 4 words in English); the tab then shows a scene picker. Array order is the picker order.

```js
dlg:{
  scene:"At a café. 민수 and 지은 talk to each other in 반말, and switch to polite speech when they speak to the staff.",
  cast:[["민수","ban"],["지은","ban"],["직원","yo","café staff"]],   // [name, default level, english?]
  lines:[
    ["직원","어서 오세요!","Welcome!"],
    ["지은","민수야, 뭐 마실 거야?","Minsu, what are you going to drink?"],
    ["지은","아이스 아메리카노 두 잔 [주세요].","Two iced Americanos, please.","yo"],   // 4th field: this line switches level
    ...
  ],
  q:[{q:"What do they order?", c:["Two iced Americanos","...","..."], why:"아이스 아메리카노 두 잔: two iced Americanos."}],
  note:"Optional, shown under the script."
}
```

- **Cast:** 2 or 3 speakers. 민수 and 지은 are friends the same age: 반말 (`"ban"`) with each other, polite (`"yo"`) with anyone older or a stranger (지은's mom, a clerk, a teacher). A third person is generic (직원, 선생님, 지은 어머니), with an English label.
- **Lines:** 6 to 10, each `[speaker, korean, english, level?]`. Leave the level off unless the line switches from the speaker's default; switched lines get a small 해요 / 반말 tag, so the switch is visible. One speaker talking to two people at two levels is two lines in a row.
- Highlight the lesson's grammar with the bracket markup, as in examples. English romanizes names (Minsu, Jieun).
- **Questions:** 2 or 3 multiple-choice in English, correct answer first, answerable from listening alone.
- Same rules as Say it: only grammar already taught, everyday and generic, nothing personal. Watch for irregular verbs before `irregulars1`/`irregulars2` (고마워 is ㅂ-irregular; 잘 마실게 or 감사합니다 work earlier).
- Add a "Dialogue" row to the lesson plan, or fold it into an existing role-play row.
- The checker checks the shape and roughly checks each sentence's ending against its level; `tools/kiwi_check.py` checks dialogue lines with Kiwi as well.
- **Clean / As spoken** (added 2026-11-25): `lines` is the As-spoken script (fillers, fragments, dropped particles; see ROADMAP 3.14). An optional `clean` array, in the same shape, is the same scene as textbook sentences, and a switch on the tab swaps which script Read, Role-play and Listen first use (stored in `uri-hangugeo.dlgStyle`, As spoken by default). Clean keeps the same speakers, speech level (반말 stays 반말), content and lesson highlights, with no fillers, full particles and subjects, and complete sentences. The questions must have the same answers in both. Where a `why` quotes the As-spoken script, add a `cwhy` quoting the clean one. Every new dialogue gets both scripts, and both go through the checker, Kiwi and the reviewers.

## Conventions

- Refer back to earlier lessons by name: "Review 2" for unit 1 lessons, "the linking lesson" for unit 2.
- Use only grammar that's already been taught in examples and drills. Irregular verbs (ㅡ, ㄹ, ㅂ, ㄷ, 르) are taught in `irregulars1` and `irregulars2`, so lessons after them can use irregulars in drills. ㅅ and ㅎ irregulars aren't taught yet.
- Keep the lesson plan to about 30 minutes, ending with "Check: Practice tab."
- Mark wrong examples with ✗ and right ones with ✓ inside the `ex` English.

## What later features will change

Lessons moved into their own files on 2026-11-23; the object shape didn't change. Planned features (`docs/ROADMAP.md`), such as Session mode, will be optional fields like `say` and `dlg`, so lessons without them keep working.
