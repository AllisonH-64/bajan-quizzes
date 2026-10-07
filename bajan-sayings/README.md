# Bajan Quizzes

Two shareable quizzes on Bajan sayings and songs, plus a home page linking them.

🔗 Live site: [bajan-sayings.netlify.app](https://bajan-sayings.netlify.app)

| File | Page |
|---|---|
| `index.html` | **Bajan Quizzes**: home page with links to both quizzes |
| `bajan-sayings-quiz.html` | **Bajan Sayings Quiz**: the full quiz, in three rounds (what the saying means, finish the saying, Bajan songs) |
| `test-yuh-brain.html` | **Test Yuh Brain**: quick-fire version, 5 random questions per round (15 in total), drawn from the main quiz's questions |
| `questions.js` | The question bank both quizzes read from |
| `_redirects` | Tells Netlify not to serve this README on the live site |
| `test-yuh-brain-preview.png` | The preview image LinkedIn and other sites show when someone shares the Test Yuh Brain link |

There is no build step. Both quizzes load their questions from `questions.js`; the only outside resource is Google Fonts.

## Editing the questions

All the questions live in `questions.js`. Change them there and both quizzes pick up the change: the Bajan Sayings Quiz asks every question, and Test Yuh Brain draws 5 at random from each round.

- **Round 1 (sayings and meanings):** `["Saying.", "What it means.", ["wrong answer", "wrong answer", "wrong answer"]]`
- **Round 2 (finish the saying):** `["Start of the saying", "correct ending.", ["wrong ending", ...], "What it means."]`
- **Round 3 (Bajan songs):** `["Question", "Right answer", ["wrong", ...], "Note shown after answering", "group"]`

Test Yuh Brain asks at most one song from each group (for example `gabby` or `folk`). Keep at least 5 groups so it can always find 5 songs.

## Deploying

The site is hosted on Netlify, on the **bajan-sayings** site.

**If Netlify is linked to this repo:** set the site's **Base directory** to `bajan-sayings`, leave the build command empty, and leave the publish directory empty. Every push to `main` then goes live.

**By drag and drop:**

1. Zip the three `.html` files, `questions.js`, `test-yuh-brain-preview.png` and `_redirects` (not this README), keeping them at the top level of the zip.
2. In Netlify, open the **bajan-sayings** site and go to **Deploys**.
3. Drag the zip into the drag-and-drop box.

The home page links to `test-yuh-brain.html` and `bajan-sayings-quiz.html`, so it also works when opened straight from your computer. On the live site Netlify shows these pages as `/test-yuh-brain` and `/bajan-sayings-quiz`.

## History

- **2026-09-30:** replaced "Who doan hear does feel." with "Har ears ya wont hear, own way ya gine feel." in both quizzes. The meaning is unchanged.
- **2026-10-07:** moved the questions into `questions.js` so Test Yuh Brain draws from the main quiz. Added 11 sayings (7 in round 1, 4 in round 2); the main quiz also gains the 4 songs that were only in Test Yuh Brain. Added a LinkedIn preview and a Share on LinkedIn button to Test Yuh Brain.
