# 우리 한국어: feature roadmap

Draft 1, 2026-11-23. This is the plan for what to add to the site next. `docs/PLAN.md` still holds the architecture and the lesson order (§6.1). This file is about features: what each lesson is made of, and what the site does around the lessons.

Nothing here is built yet. Each item says what it is, why it's worth doing, and roughly how much work it is (one "session" is one Claude Code sitting).

## 1. Where the site is now

21 lessons (7 review from class, 14 new). Each lesson has:

| Part | Every lesson has | Total |
|---|---|---|
| Slides | 6 to 8, with 11 to 25 spoken examples | 147 slides, 390 examples |
| Words | 14 to 21 flashcards | 351 |
| Practice | about 19 multiple-choice items and 2 tile builders | 354 MC, 39 builders |
| Lesson plan | exactly 5 one-line steps | 105 lines |
| Conversation questions | exactly 3, no sample answers | 63 |

Site-wide: Number Gym, Mixed review, Progress (with the study calendar), and the name picker.

**Why it feels sparse.** The slides are solid, but everything after them is thin:

- **Almost no Korean comes out of you.** 90% of practice is picking one of four answers. The only production is 2 tile builders per lesson. Nothing asks "how would you say this?"
- **The speaking happens off the page.** The lesson plan says things like "each person tells three things they did yesterday", but there's nothing on screen to support it: no prompts to read, no model answer to check against.
- **There's no connected Korean.** Every example is a single sentence. Nothing shows two people actually talking with the grammar.
- **Three conversation questions** isn't enough to fill a session, and they come with no sample answer.

So the gaps are production, conversation and connected speech, which is exactly what the goal needs (speaking with each other, and politely with older people).

## 2. Guardrails (unchanged)

- She has no Claude, so nothing she uses can depend on Claude. Static site, no server, no login.
- Desktop-first (Discord screenshare or side by side), phone sometimes. Nothing should *need* typing on a phone.
- Plain look: no emoji, no pictures. Colour carries the structure.
- **No streaks, and no flashcard grind.** Repetition should be part of doing something, not a chore on its own.
- Lesson text stays original; HTSK stays as the linked reference.

## 3. The roadmap

### Now: the next three things to build

**3.1 "Say it in Korean" (translation practice).** *This is the one you asked for.* **Feature built 2026-11-23** (branch `say-it`): the Say it tab, the 해요/반말 switch, local ratings, the Say-it Gym at `#say`, checker rules and `tools/kiwi_check.py`. **All 21 lessons have their sentences** (168 in all, polite and 반말), and every lesson but the 반말 one ends with a 반말 slide (3.1b). The Korean went through the Kiwi check and two separate reviewer passes (grammar: no errors; naturalness: register fixes applied, plus a `note` shown after the reveal saying who a form is for, e.g. "With a clerk, always 주세요").

Each lesson gets 6 to 8 English sentences to say in Korean, using that lesson's grammar. It works like a slide:

```
 ┌──────────────────────────────────────────────┐
 │  Say it in Korean                     3 / 8  │
 │                                              │
 │     I couldn't sleep last night.             │
 │                                              │
 │     hint: 못 + past          [ Show answer ] │
 └──────────────────────────────────────────────┘
          ↓ after Show answer
 │     어젯밤에 잠을 [못 잤어요].          ▶      │
 │     also fine: 어젯밤에 못 잤어요.            │
 │     [ Got it ]   [ Close ]   [ Missed it ]   │
```

- **Say it out loud first, then reveal.** No typing needed, so it works on the phone and over screenshare. When you're together, one person reads the English and the other answers.
- **Short to long:** the first sentences in a set are short and use only the new grammar. The last two or three join it with grammar from earlier lessons, so stringing sentences together comes gradually.
- Your three-button rating feeds Mixed review: "Missed it" sentences come back sooner. That's repetition built into the practice, with no deck to grind. **Ratings stay on the device** and are not sent to the Sheet, so neither of you sees the other's.
- **Every sentence has a polite and a 반말 answer.** A switch at the top of the tab, **해요 / 반말**, picks which one you're asked for, and the device remembers it. The reveal shows the chosen level large and the other level small underneath, so you see both every time. (Why: polite speech with elders, 반말 with each other.)
- **Where it shows up:** (a) a "Say it" step at the end of each lesson, (b) the lesson plan, which uses it as a timed activity, and (c) a site-wide **Say-it Gym** that mixes sentences from every lesson you've finished. That Gym is a good 5-minute session.
- **Data:** a new optional lesson field, `say:[{en:"I couldn't sleep last night.", ko:"어젯밤에 잠을 못 잤어요.", ban:"어젯밤에 잠을 못 잤어.", alt:["어젯밤에 못 잤어요."]}, ...]`. `ko` is polite, `ban` is 반말, and `alt` lists other acceptable answers. Lessons without the field still work.
- **Tab:** Say it gets its own tab beside Slides, Practice, Words and Plan. It doesn't count toward a lesson being "done".
- **Work:** 1 session for the feature and checker rules. 1 to 2 more to write about 160 sentences for the existing 21 lessons, with the usual separate Korean review pass.

**3.1b A "반말" slide in every lesson.**

The last slide of each lesson shows the lesson's forms in 반말: a polite → 반말 table, then 2 or 3 examples. Some forms are more than "drop 요": -(으)세요 becomes -아/어, -(으)ㄹ까요 becomes -자 or -(으)ㄹ까, and 이에요/예요 becomes 이야/야. Those changes get the change-chain colours. Lessons that come before the 반말 lesson in teaching order (unit 1, past, plans, shopping, linking) add a `See also:` note pointing to it. Where 반말 doesn't fit the topic (the honorifics lesson, numbers), the slide says so in one line instead of forcing examples.
- **Work:** written in the same per-lesson pass as Say-it.

**3.2 A model conversation in every lesson.** **Feature built 2026-11-24** (branch `dialogues`): the Dialogue tab with Read, Role-play (one part, or two when you're together while the site plays the third) and Listen first; a voice per speaker; a 해요/반말 tag on lines where someone switches; checker and Kiwi rules. **Written so far: 2 of 21** (`past`, `shopping`), through Kiwi and both reviewer passes. The other 19 are the next writing pass. How-to: `docs/LESSONS.md`, "Dialogue".

A short dialogue (6 to 10 lines, two speakers) that uses the lesson's grammar the way people actually talk. For example, in the past-tense lesson:

> A: 주말에 뭐 했어요?
> B: 친구하고 영화를 봤어요.
> A: 재미있었어요?
> B: 네, 정말 재미있었어요. 그런데 너무 길었어요.

- Each line plays aloud, with a different voice per speaker where the device has two Korean voices.
- **Role-play mode:** hide one speaker's lines. You read A, she says B from memory or from the English, and then each hidden line is revealed. Swap roles and go again.
- **Listen-first mode:** hear it with the Korean hidden, then answer two or three comprehension questions.
- This gives connected Korean and a script for speaking.
- **Recurring cast, all made up:** 민수 and 지은, close friends the same age who talk to each other in 반말. When they talk to someone older or someone they don't know (지은's mom, a shopkeeper, a teacher), they switch to polite. So most dialogues show both speech levels and when to switch. Situations are everyday and generic: meals, plans, shopping, phone calls, visiting someone's family. Nothing personal from real life goes in.
- **Work:** 1 session for the feature, then 1 to 2 to write 21 dialogues plus review.

**3.3 Lesson plans you can click through ("Session" mode).**

The lesson plan becomes a set of steps you click through like the slides, not a list to read.

- Each step gets its own screen: the warm-up questions shown big (with sample answers to reveal), "Teach" jumping into the right slides, each activity with its prompts on screen, and "Check" opening Practice.
- An optional timer per step (the minutes are already in the plan).
- Conversation questions go from 3 to about 8 per lesson, each with a sample answer and a follow-up question.
- This is what makes the lesson-plan side not feel sparse: every instruction it gives has something on screen to do it with.
- **Work:** 1 session for Session mode. The extra questions go into the same writing pass as 3.1 and 3.2.

### Next

**3.4 Open the sentence miner from the site.** Built 2026-11-23 (option A in §4). On the "Who's studying?" page, paste the reader's address under "Reader link". A **Reader ↗** item then appears in the menu on that device and opens the reader in a new tab. The address stays in that browser and is never in the repo. Devices without it set (hers) don't show the link.

**3.5 Save sentences from the site ("mine" here).** A small "save" mark on any example, dialogue line or Say-it sentence. Saved sentences make a **My sentences** list for each person, which joins the Say-it Gym and Mixed review. It syncs through the same Sheet as progress, so each of you sees your own list on any device. This gives her a sentence miner too, inside the site.

**3.6 One-screen recap per lesson.** The rules, the change chains and the 5 most useful sentences on one card. It's for looking something up mid-conversation, the start of next session, and printing. PLAN.md already lists this as "summary cards, later".

**3.7 Listening items in Practice.** Questions where you only hear the Korean (TTS) and pick the meaning, or rebuild what you heard with tiles. These are cheap to add because the audio already exists. PLAN.md's warning still applies: device voices are fine for practice, not a replacement for real listening (your podcasts are).

**3.8 More kinds of practice.** Each lesson currently has two kinds (multiple choice and builder). Worth adding:
- *Which one is wrong?* Four sentences, one with a real mistake (wrong particle, wrong irregular form).
- *Fix it:* one wrong sentence, pick the fixed version.
- *Conjugation tiles:* stem + ending tiles to build 추워요 from 춥다. This fits the change chains already on the slides.

**3.9 "What to reteach"** (already in PLAN.md Phase 2). A Progress panel listing each person's most-missed Practice items per lesson, so you know what to open the next session with. Say-it ratings aren't included, because they stay on the device.

**3.14 Talk like people talk (unit 3, the speaking glue).** Asked for 2026-11-25. The grammar lessons give the structure, but not the glue that holds a real conversation together: the pauses, reactions, hedges and fragments. Using only what the lessons teach still sounds like a textbook. In his words, he wants "conversations for us to go over that read naturally, read more naturally." Two parts that feed each other:

- **A short unit of glue lessons**, shown on the lessons page as "Talk like people talk" (`unit:3`, files `lessons/u3-<nn>-<id>.js`). Each has the usual slides, quiz, Say-it and dialogue, but teaches fixed spoken chunks rather than a grammar point:
  1. **Thinking out loud** (`fillers`, **sample built**): 음, 어, 그..., 저... + 혹시, 저기요, 그거 있잖아, 뭐지?, 뭐라고 하지?, 아 맞다!, echoing the question back, 글쎄, 잠깐만.
  2. **Reacting:** 아 진짜?, 헐, 대박, 그치, 맞아, 아 그래?, 에이, 응응, 오. Backchanneling while the other person talks.
  3. **Spoken connectors:** 근데, 그니까, 그래서, 그럼, 아무튼/암튼, 아니 근데, 그래도. How sentences chain in speech instead of with -고 every time.
  4. **Softeners:** 좀, 그냥, 약간, 뭐, 그런 거, -것 같아. Taking the edge off a statement or request.
  5. **Trailing endings:** -는데..., -거든, -잖아, -더라, -지?. Ending a thought without finishing it, giving a reason, checking the listener agrees.
  6. **Spoken word order:** dropped particles and subjects, fragments, short answers, and afterthoughts (verb first, the noun tacked on: 진짜 맛있다, 이거.), the Korean version of Japanese 倒置法.
  - **Lessons 2 to 6 built (2026-11-26, branch `talk-unit`):** `reacting`, `connectors`, `softeners`, `trailing`, `wordorder`, each with Say-it and a dialogue in both scripts, Kiwi-checked and through separate grammar and naturalness reviews. The checker and Kiwi now accept polite -죠 and a bare afterthought after a polite verb (진짜 맛있어요, 이거.).
- **Built 2026-11-26 (branch `scenes-batch4`):** a dialogue in both scripts for every unit 1 and unit 2 lesson (`shopping` redone), three more fillers scenes (a lesson's `dlg` may now be a list of titled scenes), and grammar batch 4. Kiwi-checked, with separate grammar and naturalness reviews and one fixer. The bullet below is the original ask.
- **Natural dialogues everywhere.** The 19 dialogues still to write (3.2) are written in this style, and the 2 done ones are redone. **Sample:** the past-tense dialogue is rewritten (echo question, 음, 그냥, 재밌었어, 시장 갔어 without 에, 아니, 아직). The rule for each dialogue: the lesson's grammar stays highlighted and correct, and everything around it sounds the way it would be said.

How this squares with §5b ("keep it plain"): the glue is fixed, very frequent chunks, which are low risk. The risk is in clever sentences, and the rule against those still stands. The naturalness reviewer carries more weight here than in grammar lessons. Its brief is to flag anything textbook-stiff as well as anything overdone.

Open question: whether the unit sits before or after the unit 2 lessons on the lessons page (it's after, for now).

**Clean / As spoken switch: decided yes (2026-11-25), built** on branch `dlg-clean`. Each dialogue keeps a clean textbook version (`dlg.clean`) next to the as-spoken one, and the Dialogue tab has a switch. Done for `past` and `fillers`. Every dialogue written from now on is written twice. `shopping` gets both when it's redone in the natural style. How-to: `docs/LESSONS.md`, "Dialogue".

### Later

**3.10 Scenario lessons.** After every 4 or 5 grammar lessons, one lesson with no new grammar: a situation that uses several earlier ones (planning a weekend, ordering for a table, a phone call to make plans, dinner at a friend's family home). It would be built from a dialogue, Say-it, and role cards ("you want X, but they're out of it").

**3.11 Topic word packs.** Vocabulary by theme rather than by grammar: food and ordering, family terms, time and dates, feelings, around the house. Each pack is a short Words set plus a few Say-it sentences, and doesn't need slides.

**3.12 Mined sentences from the reader, shown on the site.** See §4, option C.

**3.13 Split `index.html` into files** (PLAN.md Phase 2). **Done 2026-11-23** (branch `say-it`): `index.html` shell, `styles.css`, `app.js`, `lessons/`. It's 248 KB in one file now, and dialogues plus Say-it sentences will roughly double the content. This should happen before or with the 3.1 to 3.3 writing passes, not after.

### Not doing

- Streaks, daily goals, a visible flashcard grind.
- Anything that needs Claude, a paid service, or an account for her.
- Pictures or emoji on slides.
- Speech recognition grading. Browser support for Korean is uneven, and saying it then revealing the answer works well enough.

## 4. The sentence miner

**What it is.** Your miner is the "Learn this" button in `korean-reader`'s Listen tab. It takes a word you tap in a podcast line and adds it, with its sentence, to the hidden SRS, which then weaves the word into generated episodes. It runs on your home desktop and you reach it over Tailscale. It's built for one user (you), so its database, placement and SRS are all yours.

**What that means for linking it from this site.** This site is public on GitHub Pages and the reader is private on your tailnet. The site can *point* at the reader, but it can't reach into it. Whatever the site does, the reader only opens on a device signed in to your Tailscale. Here are the options, smallest first:

| Option | What you get | Who it works for | Work |
|---|---|---|---|
| **A. A Reader link** | A "Reader" button in the site's header that opens korean-reader. The address is set once per device in a settings box and kept in that browser, so your tailnet name never goes into this public repo. | You, on your devices | Under an hour |
| **B. Mine on the site** | Item 3.5: a save mark on sentences here, with each person's list synced through the Sheet. | Both of you | 1 session |
| **C. Reader sentences, shown here** | korean-reader sends your "Learn this" sentences (Korean, English and the podcast line) to a new tab in the progress Sheet. The site shows them as a list you can turn into Say-it practice. | Both can see yours. Only you mine. | 1 to 2 sessions across both repos |
| D. She uses the reader too | Share your desktop to her Tailscale account, and make korean-reader multi-user (its own placement, SRS and DB per person). | Both | Large: it reverses korean-reader's single-user design. Not recommended now. |

**Decided:** A is built (3.4). B may come later. C and D aren't planned.

## 5. Suggested order

1. Split the file (3.13). Do it first, so the content passes after it land in lesson files.
2. Say it in Korean (3.1), the feature and then the writing pass.
3. Model conversations (3.2).
4. Session mode and more questions (3.3).
5. Saving sentences (3.5). The Reader link is already built.
6. Then the Next list, in whatever order the sessions show is missing.

The writing passes for 3.1 to 3.3 can be done together, one lesson at a time (Say-it sentences, dialogue and questions for the same lesson in one go). That keeps the Korean review to one pass per lesson.

## 5b. Checking the Korean without a native speaker

Nobody available speaks Korean natively, and adding Say-it, 반말 and dialogues will roughly double the Korean on the site. Each lesson's new Korean goes through three layers:

1. **Automatic check with Kiwi**, the Korean word analyzer already installed with korean-reader (`C:\dev\korean-reader\server\.venv`). A script splits every sentence into stem and endings and flags: a polite answer that doesn't end politely, a 반말 answer that still ends in 요 or 니다, and forms Kiwi doesn't recognise (in testing it flagged the misspelling 잣어요). It catches mechanical mistakes, **not unnatural phrasing**.
2. **Two separate reviewer passes** (two fresh Claude agents that didn't write the sentences, one focused on grammar and one on "would a Korean person say it this way?"). Anything they disagree on gets simplified or cut.
3. **Keep it plain.** Use short, common, textbook-style sentences and avoid slang or idioms. Most of the risk is in clever sentences, so don't write them.

The existing "this looks wrong" flag stays. Anything either of you finds goes straight into a fix. This lowers the error rate but doesn't remove it: a few sentences will still be stiff in ways only a native speaker would notice.

## 6. Decisions (Austin, 2026-11-23)

1. **The miner: open it, nothing more for now.** Option A is built: a Reader link set on the "Who's studying?" page, kept in that browser only. Mining for her (B) may come later.
2. **Say-it: say, then reveal.** No typed checking. Neither of you types Korean yet, and saying it out loud is the point. The typed mode in 3.1 is dropped.
3. **Dialogues: generic and everyday.** Nothing personal goes into this public repo: no real names, places or family details.
4. **Say-it first, then dialogues.** In his words: "we need to be able to gain confidence in doing short pieces of Korean and then start stringing it together." So each lesson's Say-it set runs from short to long: single short sentences first, then the last two or three join in grammar from earlier lessons. Dialogues come after that, as the next step up.
5. **Say it is its own tab.**
6. **Say-it ratings stay private**, on the device only.
7. **Recurring generic characters:** 민수 and 지은 (3.2).
8. **Batch 4 waits** until Say-it is in all 21 existing lessons. After that, new lessons ship with Say-it, the 반말 slide and a dialogue.
9. **반말 in every lesson:** a 반말 answer for every Say-it sentence and a 반말 slide per lesson (3.1, 3.1b). Polite speech is for elders, 반말 is for each other, and "it'd help both of us if we have the 반말 version as well".
10. **No native speaker:** the Korean is checked as in §5b.
