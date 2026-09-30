# Bajan Quizzes

Two shareable quizzes on Bajan sayings and songs, plus a home page linking them.

🔗 Live site: [bajan-sayings.netlify.app](https://bajan-sayings.netlify.app)

| File | Page |
|---|---|
| `index.html` | **Bajan Quizzes**: home page with links to both quizzes |
| `bajan-sayings-quiz.html` | **Bajan Sayings Quiz**: the full quiz, in three rounds (what the saying means, finish the saying, Bajan songs) |
| `test-yuh-brain.html` | **Test Yuh Brain**: quick-fire version, 5 random questions per round (15 in total) |

Each page is a single self-contained HTML file with no build step. The only outside resource is Google Fonts.

## Editing the questions

The questions are near the bottom of each quiz file, in the `<script>` section:

- **Round 1 (sayings and meanings):** `["Saying.", "What it means.", ["wrong answer", "wrong answer", "wrong answer"]]`
- **Round 2 (finish the saying):** `["Start of the saying", "correct ending.", ["wrong ending", ...], "What it means."]`
- **Round 3 (Bajan songs):** `["Question", "Right answer", ["wrong", ...], "Note shown after answering"]`

The two quizzes keep separate copies of the questions, so make the same change in both files.

## Deploying

The site is hosted on Netlify, on the **bajan-sayings** site.

**If Netlify is linked to this repo:** set the site's **Base directory** to `bajan-sayings`, leave the build command empty, and leave the publish directory empty. Every push to `main` then goes live.

**By drag and drop:**

1. Zip the three `.html` files in this folder (not this README), keeping them at the top level of the zip.
2. In Netlify, open the **bajan-sayings** site and go to **Deploys**.
3. Drag the zip into the drag-and-drop box.

The home page links to `test-yuh-brain.html` and `bajan-sayings-quiz.html`, so it also works when opened straight from your computer. On the live site Netlify shows these pages as `/test-yuh-brain` and `/bajan-sayings-quiz`.

## History

- **2026-09-30:** replaced "Who doan hear does feel." with "Har ears ya wont hear, own way ya gine feel." in both quizzes. The meaning is unchanged.
