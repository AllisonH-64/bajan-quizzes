# Quiz Sites

Two quiz websites, each in its own folder and each hosted as its own Netlify site.

| Folder | Site | Live link |
|---|---|---|
| [`bajan-sayings/`](bajan-sayings/) | **Bajan Quizzes**: the Bajan Sayings Quiz and Test Yuh Brain | [bajan-sayings.netlify.app](https://bajan-sayings.netlify.app) |
| [`barbados-quiz/`](barbados-quiz/) | **Barbados 60 & 5**: the toddler and ages 7–11 quizzes, plus printable packs | [barbados-quiz.netlify.app](https://barbados-quiz.netlify.app) |

See the README in each folder for what's in the site and how to deploy it.

## Linking Netlify to this repo

Link each Netlify site to this same repo, and give each one its own **Base directory**:

- **bajan-sayings** site → Base directory `bajan-sayings`
- **barbados-quiz** site → Base directory `barbados-quiz`

Leave the build command and publish directory empty for both. Each site then publishes only its own folder.
