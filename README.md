# 우리 한국어 교실

Seven Korean lessons that pick up where the KSM textbook ended: polite and formal endings, honorific and humble speech, 에서, 있다/없다 with position words, 에 / (으)로 direction, Sino vs native numbers, and counters. Each lesson has slides, a practice quiz, flashcards and a lesson plan. There's also a Number Gym, a mixed review and a shared Progress page.

The lesson text is original. Each lesson links to the matching free lesson on [How to Study Korean](https://www.howtostudykorean.com/).

The whole site is one file, `index.html`, and needs no build step. Progress is saved in each browser. When `SHEET_URL` is set, finished quizzes are also logged to a Google Sheet, so the Progress page can show everyone's scores.

## 1. Shared progress sheet (once, about 5 minutes)

1. Go to <https://sheets.new> and name the sheet "우리 한국어 progress".
2. **Extensions → Apps Script**. Delete what's in `Code.gs` and paste in [`apps-script/Code.gs`](apps-script/Code.gs). Save.
3. **Deploy → New deployment**. Click the gear and pick **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**, approve the permissions prompt (Google warns because the script is unverified: Advanced → Go to project), then copy the **Web app URL** (ends in `/exec`).
5. In `index.html`, set `const SHEET_URL = "https://script.google.com/macros/s/…/exec";`, then commit and push.

The sheet stores only the name each person types on the site and their scores. Anyone who has the `/exec` URL could read or add rows, so use first names or nicknames.

If you edit `Code.gs` later, use **Deploy → Manage deployments → Edit → New version**. That keeps the same URL.

## 2. Hosting (GitHub Pages, free)

The repo is served from the `main` branch root. After pushing, the site is at `https://<your-github-username>.github.io/uri-hangugeo/`.

## Adding lessons

Add an entry to the `LESSONS` array in `index.html` with the same shape as the others (slides, vocab, ex, plan, talk, after, src). Practice items are `{k:"mc", q, c:[correct, ...wrong], why}` or `{k:"build", q, ok:[accepted sentences], x:[extra wrong tiles]}`.
