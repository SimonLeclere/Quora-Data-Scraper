<h1 align="center">Welcome to Quora-profile-scraper 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.4-blue.svg?cacheSeconds=2592000" />
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

A small scraper to get information about a profile on Quora. Use node-fetch and cheerio.

https://www.npmjs.com/package/quora-profile-scraper

## Install 

```sh
npm i Quora-profile-scraper
```

## Usage

The module currently has only one function: fetchUser. It allows, from a link to a Quora profile, to obtain information such as the number of responses, the number of subscribers, the description... The parameter { raw } is optional and must be a boolean. It allows you to obtain more complete data, but more difficult to use.

```js
const quora = require('./index');

quora.fetchUser('https://fr.quora.com/profile/Simon-Leclere', { raw: false }).then(console.log); // second parameter is optional

// {
//     name: 'Simon Leclere',
//     description: "Touche à tout passionné d'informatique et de high-tech",
//     biography: "Jeune développeur, j'adore bidouiller et tout essayer. Une fois j'ai démonté une imprimante, mes parents ont pas trop aimé. Bref maintenant que j'ai fini d'embêter mes proches je viens vous embêter sur Quora. Gare à vous !\n" +
//       "Une hyperbole c'est pas pour boire de l'hypersoupe",
//     avatar: 'https://qph.fs.quoracdn.net/main-thumb-1099370703-200-rtyydeuedcynznijnnemevsxwfspapzo.jpeg',
//     knowledges: [
//       {
//         name: 'Informatique',
//         icon: 'https://qph.fs.quoracdn.net/main-thumb-t-2365810-100-bmxhhffzwrykfgvyslsuygjqirqckfpe.jpeg',
//         answers: 3
//       },
//       {
//         name: 'JavaScript (langage de programmation)',
//         icon: 'https://qph.fs.quoracdn.net/main-thumb-t-2365787-100-etdzymypqakpjodoshxjdmdzmookmtzb.jpeg',
//         answers: 0
//       },
//       {
//         name: 'Langages de programmation',
//         icon: 'https://qph.fs.quoracdn.net/main-thumb-t-2365696-100-eyzcdieyvqrecbkncuwmmputwczrexod.jpeg',
//         answers: 0
//       },
//       {
//         name: 'Français (langue)',
//         icon: 'https://qph.fs.quoracdn.net/main-thumb-t-2365818-100-ylwoccgbktbvlzqdlutnuhhpwxhftgta.jpeg',
//         answers: 0
//       },
//       {
//         name: 'Start-ups des technologies',
//         icon: 'https://qph.fs.quoracdn.net/main-thumb-t-2374951-100-ryfwjnoqpaynxascptuphqrnmygwhdyc.jpeg',
//         answers: 0
//       }
//     ],
//     spaces: [],
//     followers: 8,
//     following: 6,
//     answers: 9,
//     questions: null,
//     shares: null,
//     posts: null,
//     views: 44788,
//     lastMonthViews: 25205,
//     verified: null
// }
```

## Author

👤 **Simon Leclere**

* Github: [@SimonLeclere](https://github.com/SimonLeclere)

## 🤝 Contributors

* [@MRakox](https://github.com/MRakox/)

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/SimonLeclere/Quora-profile-scraper/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Simon Leclere](https://github.com/SimonLeclere).<br />
This project is [MIT](https://github.com/SimonLeclere/Quora-profile-scraper/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
