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

So the gaps are production, conversation and connected speech, which is exactly what the goal needs (speaking with each other, and with her parents).

## 2. Guardrails (unchanged)

- She has no Claude, so nothing she uses can depend on Claude. Static site, no server, no login.
- Desktop-first (Discord screenshare or side by side), phone sometimes. Nothing should *need* typing on a phone.
- Plain look: no emoji, no pictures. Colour carries the structure.
- **No streaks, and no flashcard grind.** Repetition should be part of doing something, not a chore on its own.
- Lesson text stays original; HTSK stays as the linked reference.

## 3. The roadmap

### Now: the next three things to build

**3.1 "Say it in Korean" (translation practice).** *This is the one you asked for.*

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
- **Optional typed mode on desktop:** type with the Korean keyboard, and it checks against the accepted answers (ignoring spacing and punctuation). If it doesn't match, it shows the model answer with a "count mine as right" button, because a hand-written list of answers will never cover every correct sentence.
- Your three-button rating feeds Mixed review: "Missed it" sentences come back sooner. That's repetition built into the practice, with no deck to grind.
- **Where it shows up:** (a) a "Say it" step at the end of each lesson, (b) the lesson plan, which uses it as a timed activity, and (c) a site-wide **Say-it Gym** that mixes sentences from every lesson you've finished. That Gym is a good 5-minute session.
- **Data:** a new optional lesson field, `say:[["I couldn't sleep last night.","어젯밤에 잠을 못 잤어요.","어젯밤에 못 잤어요."], ...]`, with the English, the model answer, then any other accepted answers. Lessons without it still work.
- **Work:** 1 session for the feature and checker rules. 1 to 2 more to write about 160 sentences for the existing 21 lessons, with the usual separate Korean review pass.

**3.2 A model conversation in every lesson.**

A short dialogue (6 to 10 lines, two speakers) that uses the lesson's grammar the way people actually talk. For example, in the past-tense lesson:

> A: 주말에 뭐 했어요?
> B: 친구하고 영화를 봤어요.
> A: 재미있었어요?
> B: 네, 정말 재미있었어요. 그런데 너무 길었어요.

- Each line plays aloud, with a different voice per speaker where the device has two Korean voices.
- **Role-play mode:** hide one speaker's lines. You read A, she says B from memory or from the English, and then each hidden line is revealed. Swap roles and go again.
- **Listen-first mode:** hear it with the Korean hidden, then answer two or three comprehension questions.
- This gives connected Korean and a script for speaking. Lines can lean on family situations (talking with parents, meals, plans), which gives her parents' visits a reason to show up.
- **Work:** 1 session for the feature, then 1 to 2 to write 21 dialogues plus review.

**3.3 Lesson plans you can click through ("Session" mode).**

The lesson plan becomes a set of steps you click through like the slides, not a list to read.

- Each step gets its own screen: the warm-up questions shown big (with sample answers to reveal), "Teach" jumping into the right slides, each activity with its prompts on screen, and "Check" opening Practice.
- An optional timer per step (the minutes are already in the plan).
- Conversation questions go from 3 to about 8 per lesson, each with a sample answer and a follow-up question.
- This is what makes the lesson-plan side not feel sparse: every instruction it gives has something on screen to do it with.
- **Work:** 1 session for Session mode. The extra questions go into the same writing pass as 3.1 and 3.2.

### Next

**3.4 Open the sentence miner from the site.** See §4. A small first step: a "Reader" link on your devices only.

**3.5 Save sentences from the site ("mine" here).** A small "save" mark on any example, dialogue line or Say-it sentence. Saved sentences make a **My sentences** list for each person, which joins the Say-it Gym and Mixed review. It syncs through the same Sheet as progress, so each of you sees your own list on any device. This gives her a sentence miner too, inside the site.

**3.6 One-screen recap per lesson.** The rules, the change chains and the 5 most useful sentences on one card. It's for looking something up mid-conversation, the start of next session, and printing. PLAN.md already lists this as "summary cards, later".

**3.7 Listening items in Practice.** Questions where you only hear the Korean (TTS) and pick the meaning, or rebuild what you heard with tiles. These are cheap to add because the audio already exists. PLAN.md's warning still applies: device voices are fine for practice, not a replacement for real listening (your podcasts are).

**3.8 More kinds of practice.** Each lesson currently has two kinds (multiple choice and builder). Worth adding:
- *Which one is wrong?* Four sentences, one with a real mistake (wrong particle, wrong irregular form).
- *Fix it:* one wrong sentence, pick the fixed version.
- *Conjugation tiles:* stem + ending tiles to build 추워요 from 춥다. This fits the change chains already on the slides.

**3.9 "What to reteach"** (already in PLAN.md Phase 2). A Progress panel listing each person's most-missed items and Say-it sentences per lesson, so you know what to open the next session with.

### Later

**3.10 Scenario lessons.** After every 4 or 5 grammar lessons, one lesson with no new grammar: a situation that uses several earlier ones (planning a weekend, ordering for a table, a phone call to make plans, dinner with her parents). It would be built from a dialogue, Say-it, and role cards ("you want X, but they're out of it").

**3.11 Topic word packs.** Vocabulary by theme rather than by grammar: food and ordering, family terms (very useful with parents), time and dates, feelings, around the house. Each pack is a short Words set plus a few Say-it sentences, and doesn't need slides.

**3.12 Mined sentences from the reader, shown on the site.** See §4, option C.

**3.13 Split `index.html` into files** (PLAN.md Phase 2). It's 248 KB in one file now, and dialogues plus Say-it sentences will roughly double the content. This should happen before or with the 3.1 to 3.3 writing passes, not after.

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

**Recommendation:** A now, because it's tiny and gives you the shortcut. B with the Now batch, because it's the miner she can actually use. Hold C until you notice you *want* your podcast sentences in the shared study time, not just in your own reading.

## 5. Suggested order

1. Split the file (3.13). Do it first, so the content passes after it land in lesson files.
2. Say it in Korean (3.1), the feature and then the writing pass.
3. Model conversations (3.2).
4. Session mode and more questions (3.3).
5. Reader link (A) and saving sentences (3.5).
6. Then the Next list, in whatever order the sessions show is missing.

The writing passes for 3.1 to 3.3 can be done together, one lesson at a time (Say-it sentences, dialogue and questions for the same lesson in one go). That keeps the Korean review to one pass per lesson.

## 6. Open questions for you

1. **The miner:** when you said "access it from this site", did you mean opening *your* reader (option A), or her being able to mine too (B or D)?
2. **Say-it answers:** is reveal-and-rate enough, or do you want typed checking on the desktop from the start?
3. **Dialogues:** generic situations, or tuned to your life (her parents, the two of you planning things)? Tuned is more useful, but it goes into a public repo.
4. **Order:** is Say-it first right, or do the dialogues matter more to you?
