# 우리 한국어 교실: build plan

Draft 2, 2026-11-21. Draft 1 was reviewed by a separate agent for gaps; its findings are folded in and listed in §9. Nothing beyond "Current state" is implemented.

## 1. Purpose

- **Main job: instruction.** Austin passes on what he learned. Concepts from the KSM textbook and How to Study Korean (HTSK) become short lessons he can teach from, or his girlfriend can work through alone.
- **Second job:** self-paced study for either of them, on laptop, phone or tablet.
- **Not:** a product, anything for sale, or a replacement for HTSK. Lesson text is original; every lesson links to the HTSK lesson it covers.
- **Constraint:** she has no Claude subscription, so nothing she uses can depend on Claude.
- **Parked:** linking to Austin's reader app.

## 2. Current state (done, not online)

- `E:\Study\Korean`, git branch `main`, commit `1e49d7b`. One file, `index.html`, holds all the content and code. `apps-script/Code.gs` (the Sheet logger) is written but not deployed.
- Unit 1 has 7 lessons: 해요/합니다 · honorific and humble speech · 에서 · 있다/없다 and position words · 에 / (으)로 · Sino and native numbers · counters.
- Each lesson has Slides (with a full-screen Present button), Practice, Words and a Lesson plan. Site-wide: Number Gym, Mixed review, Progress, and the "Who's studying?" name.
- **Phase 1 code work done (branch `phase1-go-live`, 2026-11-21):** sync reads the Sheet's reply and keeps anything unconfirmed; event ids plus server-side dedupe; formula-text guard, item allowlist and size caps in `Code.gs`; pagehide/visibility save and retry; noindex + `robots.txt`; PNG icons and `manifest.webmanifest`. Still open in Phase 1: GitHub repo and Pages, Sheet deploy and `SHEET_URL`, phone test.

## 3. Architecture

### 3.1 Hosting
- GitHub Pages from a public repo `uri-hangugeo` on Austin's free GitHub account. The URL is `https://<username>.github.io/uri-hangugeo/`, and each push redeploys in about a minute (browsers may take up to 10 minutes to see the change).
- No server and no build step: plain HTML, CSS and JS.
- `noindex` meta and `robots.txt` keep it out of search. It is still readable by anyone with the link, and so is the public commit history. Keeping it truly private would need a paid GitHub plan.

### 3.2 File layout (Phase 2)
```
E:\Study\Korean\
  index.html                 shell; one <script> tag per lesson file, in teaching order
  app.js                     router, renderers, quiz engine, gym, progress, generators
  styles.css                 light/dark tokens, components
  lessons/
    u1-01-endings.js         LESSONS.push({ ... })  one file per lesson
    u1-02-honorifics.js
    ...
  apps-script/Code.gs        Sheet logger (copy pasted into the Sheet's script editor)
  tools/check.mjs            lesson checker (run before commit; also a git pre-commit hook)
  docs/PLAN.md               this file
  docs/GUIDE.md              adding a lesson, the item types, the markup, the roadmap
  README.md                  setup: Pages, Sheet, local preview
```
- **Lessons are JS files, not JSON.** JS allows comments, multi-line text, and Korean quotes without escaping, and the page still works when `index.html` is opened by double-click (file://), with no local server needed. Adding a lesson means adding one file and one `<script>` line.
- **Generated items:** practice that code builds (the picture scenes, number drills) is written in a lesson as `{k:"gen", name:"scene", count:5}`, which points to a generator in `app.js`.
- **Markup in lesson text** is documented in GUIDE.md: `[x]` highlights, `___` makes a blank, `<b>` is allowed.
- **Lesson ids are permanent.** Progress is keyed by id, so an id is never renamed or reused.

### 3.3 Where everything lives
| What | Where | Backup |
|---|---|---|
| Code and lessons | `E:\Study\Korean` | GitHub |
| Live site | GitHub Pages | rebuilt from the repo |
| Progress on each device | browser localStorage | the Sheet, plus "Export my progress" |
| Shared log | Google Sheet "우리 한국어 progress", tab `Log`, in Austin's Drive | Drive. Austin is the only owner; see §8 |
| Plan and guide | `docs/` | GitHub |

### 3.4 Progress and identity
- No accounts. Each person types a name once per device, picked from names already on the Sheet where possible to avoid duplicates from typos.
- Logged to the Sheet: slides finished, practice and review scores, Gym streaks of 3 or more, **each wrong answer by item id** (so Austin sees what to reteach), and **"this looks wrong" flags** she taps on an item.
- **Reliable sync (Phase 1 fix):** read the Sheet's reply and only clear the queue when it confirms how many rows it added. Otherwise keep the events and show "not sent". Every event carries an id, and the script skips ids it has already saved, so a retry never creates double rows.
- **Leaving mid-session:** when the page is hidden or closed, the current Gym streak and any queued events are saved, and sent the next time the site opens.
- **Restore** is an explicit "I've used this on another device" button. It pulls that name's best scores from the Sheet. It never happens just because a name is typed.
- **Export / Import my progress** (a JSON text to copy): a backup that doesn't rely on the Sheet. This matters because iPhone Safari can wipe site storage after about 7 days without visits. Adding the site to the home screen avoids that.
- Stored state carries a `version` number so later changes can migrate it.

### 3.5 Sheet script hardening (Phase 1)
- Any text starting with `= + - @` is stored as plain text, never as a formula.
- `item` must be a known lesson id or Gym mode; the limits for names, row counts and request size are enforced.
- `waitLock` moves inside the error handling.
- Deployment: Execute as **Me**, access **Anyone** ("Anyone with a Google account" would lock her out). After editing the script: Manage deployments → Edit → New version, which keeps the same URL.

### 3.6 Devices, offline, audio
- Built for phone first; the laptop gets keyboard shortcuts. Test on her actual phone and browser (open question §8).
- **Offline is deferred** until she needs it. If she does, Phase 3 adds a service worker (network first for lessons, a cache version bumped on every deploy, a "force refresh" link) plus a system-font fallback. The Google Fonts files can't be cached reliably for offline use.
- Home-screen install: manifest and a PNG apple-touch-icon (iPhone ignores SVG icons).
- Audio: the browser's Korean voice. Quality depends on the device, so audio supports the lessons but never stands in for listening practice.

## 4. Lesson anatomy (every lesson)
1. Header: unit and number, 원고지 Korean title, English title, HTSK links.
2. Goals: 3 or 4 "you can now…" lines.
3. Slides (5 to 8): one idea each, with explanation, tables, and examples with audio.
4. Practice (10 to 15): multiple choice, sentence building (tiles, no Korean keyboard needed), and generated items. Every item has a "why" and a "this looks wrong" flag.
5. Words: flashcards with audio.
6. Lesson plan: a 30-minute script, conversation questions, and follow-up reading.
7. Status: `reviewed: true/false`. Unreviewed lessons show a small "draft" tag to Austin.
- Done = last slide viewed and practice at 80% or more.
- Sentence-building answers list every valid word order, so a correct sentence is never marked wrong.

## 5. Teaching features (the instruction job)
- **Present mode** (exists): full-screen slides with arrow keys, for laptop or TV.
- **Phase 2:** "What to reteach": a Progress panel listing her most-missed items and flagged items per lesson. Austin uses it to plan the next session.
- **Phase 2:** a printable lesson plan and a one-page cheat sheet per lesson (printing works on a normal website).
- **Phase 3, only if wanted:** a presenter view with notes on one screen and slides on the other.

## 6. Adding content after Unit 1

### 6.1 Roadmap
- **KSM coverage (Austin's checklist, 2026-11-22):** the class covered the 7 Unit 1 topics plus 안/못, days and dates, 도, -고 싶어요, 만, question words, 의, and -(으)ㄹ 수 있어요. Everything else on the 53-topic checklist is new. The checklist is https://claude.ai/artifact/TAoGwBczDb8WNhDWmg7EQK (read its `marks` collection).
- **Order: most useful in real conversation first.** Unit 1 stays on the site as "Review from class"; Unit 2 lessons show first.
- **Unit 2, batch 1 (built 2026-11-22):** past tense (`past`), future and -(으)ㄹ까요 (`plans`), ordering and shopping (`shopping`, Austin's pick), -고 / -지만 / -아서 (`linking`).
- **Unit 2, batch 2 (built 2026-11-22):** 반말 (`banmal`), -고 있어요 (`ing`), -(으)세요 / -지 마세요 (`requests`), 하고 / (이)랑 / 한테 (`with`), -아/어야 해요 / -아/어도 돼요 / -(으)면 안 돼요 (`must`). How-to guide: `docs/LESSONS.md`; checker: `tools/check.mjs`.
- **Unit 2, batch 3 (built 2026-11-22):** irregulars in two lessons, ㅡ and ㄹ (`irregulars1`) then ㅂ, ㄷ and 르 (`irregulars2`); 보다 / 더 / 제일 (`compare`); -(으)면 and -(으)면 좋겠어요 (`if`); -(으)러 가요 / 와요 (`purpose`). Drills from here on may use irregular verbs.
- **Unit 2, batch 4 (built 2026-11-26):** -기 전에 / -(으)ㄴ 후에 (`beforeafter`); -(으)니까 (`because`); -는데 (`neunde`); noun modifiers (`modifiers`); -(으)려고 (`intend`); -아/어 보다 (`try`); -(으)ㄹ 수 있다 / 없다 and 못 (`can`).
- Ad-hoc "notes" lessons: vocab and examples from something he picked up elsewhere, with practice optional and no lesson plan needed.

### 6.2 Routine for one new lesson
1. Austin names the topic: an HTSK lesson, a textbook page photo, or his notes.
2. Claude drafts the lesson file. Originality rule: explanations and example sentences are written fresh; no HTSK sentence or explanation is copied, and HTSK is used only to check what to cover and to link.
3. Korean check: a separate reviewer pass on every sentence and conjugation, plus Austin's read. A native-speaker spot check when available (open question). The lesson ships with `reviewed:false` until Austin approves it.
4. `node tools/check.mjs`: checks the layout, unique ids, that every answer is present, and tile sentences. (Generator checks and a pre-commit hook are still Phase 2.)
5. Preview: double-click `index.html`, or use the phone on the same Wi-Fi via `python -m http.server`.
6. Commit and push. It's live within about 10 minutes, and she sees it on her next visit.
7. Afterwards: "this looks wrong" flags and frequently missed items feed corrections and the next session.

Cadence: about one lesson a week, matched to their actual pace.

## 7. Phases
New features (translation practice, dialogues, Session mode, the reader link and more) are planned in `docs/ROADMAP.md` (2026-11-23).

| Phase | Work | Austin's part |
|---|---|---|
| 0, done | Unit 1 content, single-file site, Sheet script | |
| 1, go live | Fix the sync bugs (§3.4), harden the script (§3.5), noindex, PNG icon and manifest, pagehide save. GitHub: install `gh`, log in, create repo, push, turn on Pages. Deploy the Sheet script and set `SHEET_URL`. Test on both phones. Send her the link. | GitHub sign-in, Sheet deploy, phone test, answers in §8 |
| 2, grow and teach | Split into app.js, styles.css and lesson files; `gen` items; check.mjs plus pre-commit hook; GUIDE.md; wrong-answer and flag logging; "What to reteach"; restore and export/import; reviewed tag; print views | review |
| 3, only if needed | Offline (service worker and font fallback), presenter view, flashcard review queue | decide when it comes up |
| 4, Unit 2 onward | Batches 1 to 3 built (§6.1). Then about a lesson a week (§6.2) | topic picks, approvals |

Deferred on purpose: spaced repetition, listening drills on synthetic audio, separate roadmap and content-guide docs, and the service worker. These are not needed to transfer knowledge to one person.

## 8. Open questions for Austin
1. ~~The KSM textbook's table of contents~~ Answered by the checklist (§6.1).
2. Her phone and browser: iPhone with Safari or Chrome, or Android?
3. Does she need it offline, or is it mostly used on Wi-Fi?
4. Is she OK with her nickname and scores sitting on a public-link Sheet, and with Austin seeing her missed answers?
5. Is a native Korean speaker available for spot checks?
6. Where will you teach: laptop, TV, or a phone side by side?
7. Long-term Sheet ownership: is anyone else a backup owner if you're deployed or unreachable? (Export/import covers her data either way.)
8. Keep or delete the old claude.ai artifact?

## 9. Review log
Draft 1 → Draft 2 changes, from an independent review of the plan against the code:
- Sync could report success on a failed write and delete the queue (verified) → fixed in Phase 1 by reading the script's reply.
- Formula injection on a public endpoint (verified) → §3.5.
- Lost streaks when the phone closes the tab (verified) → pagehide save.
- Restore could merge two people under a shared name, and had no event ids (verified) → explicit restore, event ids, dedupe.
- The JSON schema couldn't express generated items; JSON is error-prone to hand-edit → JS lesson files plus `gen` items.
- Google Fonts and the service worker don't give real offline → offline deferred, with a font fallback noted.
- iPhone storage eviction and the PNG icon → export/import, home-screen install, PNG icon.
- The teaching job was thin → missed-item logging, "What to reteach", print views.
- A Claude-only Korean check shares Claude's blind spots → flags from her, reviewed tag, native check when available.
- Scope trimmed: spaced repetition, synthetic listening drills, two separate docs, service worker.
- Not adopted: "slides have no full-screen view" (a Present button already exists).
