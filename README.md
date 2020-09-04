<h1 align="center">Welcome to Quora-profile-scraper 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/SimonLeclere/Quora-profile-scraper#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/SimonLeclere/Quora-profile-scraper/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/SimonLeclere/Quora-profile-scraper/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/SimonLeclere/Quora-profile-scraper" />
  </a>
</p>

### 🏠 [Homepage](https://github.com/SimonLeclere/Quora-profile-scraper#readme)

A small scraper to get information about a profile on Quora. Use puppeteer.

https://www.npmjs.com/package/quora-profile-scraper

## Install 

```sh
npm i Quora-profile-scraper
```

## Usage

```js
const quora = require('Quora-profile-scraper');

quora.fetchUser('https://www.quora.com/profile/James-Altucher').then(console.log);

// {
//     name: 'James Altucher',
//     description: 'Author, entrepreneur, podcaster, wall street investor',
//     biography: 'James Altucher is the author of the bestselling book Choose Yourself, editor at The Altucher Report and host of the popular podcast, The James Altucher Show, which takes you beyond business and entrepreneurship by exploring what it means to be human and achieve well-being in a world that is increasingly complicated.\n' +
//       '\n' +
//       'You can learn everything (probably too much) about him at The Altucher Confidential',
//     avatar: 'https://qph.fs.quoracdn.net/main-thumb-288636-200-fhgkbzymvtxxzdwnhcyyahhktlfzazij.jpeg',
//     knowledges: [
//       'Life Advice',
//       'Self-Improvement',
//       'Career Advice',
//       'Writing',
//       'Business',
//       'Psychology of Everyday Life',
//       'Meaning of Life',
//       'Podcast Production',
//       'Human Memory'
//     ],
//     spaces: [
//       'The Altucher Confidential',
//       "James Altucher's Posts",
//       'Entrepreneurial Mindset',
//       'The Road Not Taken...',
//       'Growth Mindset Lab'
//     ],
//     followers: '282,189',
//     answers: '969',
//     questions: '370',
//     shares: '11',
//     posts: '917'
// }
```

## Author

👤 **Simon Leclere**

* Github: [@SimonLeclere](https://github.com/SimonLeclere)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/SimonLeclere/Quora-profile-scraper/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Simon Leclere](https://github.com/SimonLeclere).<br />
This project is [ISC](https://github.com/SimonLeclere/Quora-profile-scraper/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
