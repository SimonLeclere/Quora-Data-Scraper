<h1 align="center">Welcome to Quora-Data-Scraper 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.2.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/SimonLeclere/Quora-Data-Scraper#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/SimonLeclere/Quora-Data-Scraper/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/SimonLeclere/Quora-Data-Scraper/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/SimonLeclere/Quora-Data-Scraper" />
  </a>
</p>

A small scraper to get information about a profile, a question or an answer on Quora. Use node-fetch and cheerio.

https://www.npmjs.com/package/quora-data-scraper

## Install 

```sh
npm i quora-data-scraper
```

## Usage

* ### fetchUser(url, options)

Allows, from a link to a Quora profile, to obtain information such as the number of responses, the number of subscribers, the description... The parameter { raw } is optional and must be a boolean. It allows you to obtain more complete data, but more difficult to use.


```js
const quora = require('quora');

quora.fetchUser('https://fr.quora.com/profile/Simon-Leclere', { raw: false }).then(console.log); // second parameter is optional

// User {
//   name: 'Simon Leclere',
//   description: "Touche à tout passionné d'informatique et de high-tech",
//   biography: "Jeune développeur, j'adore bidouiller et tout essayer. Une fois j'ai démonté une imprimante, mes parents ont pas trop aimé. Bref maintenant que j'ai fini d'embêter mes proches je viens vous embêter sur Quora. Gare à vous !\n" +
//     "Une hyperbole c'est pas pour boire de l'hypersoupe",
//   avatar: 'https://qph.fs.quoracdn.net/main-thumb-1099370703-200-rtyydeuedcynznijnnemevsxwfspapzo.jpeg',
//   url: 'https://fr.quora.com/profile/Simon-Leclere',
//   knowledges: [
//     {
//       name: 'Informatique',
//       icon: 'https://qph.fs.quoracdn.net/main-thumb-t-2365810-100-bmxhhffzwrykfgvyslsuygjqirqckfpe.jpeg',
//       answers: 3
//     },
//     {
//       name: 'France',
//       icon: 'https://qph.fs.quoracdn.net/main-thumb-t-2324114-100-clhmyzyjnapuxbyxggbffcajsncvgwky.jpeg',
//       answers: 0
//     },
//     {
//       name: 'JavaScript (langage de programmation)',
//       icon: 'https://qph.fs.quoracdn.net/main-thumb-t-2365787-100-etdzymypqakpjodoshxjdmdzmookmtzb.jpeg',
//       answers: 0
//     },
//     {
//       name: 'Langages de programmation',
//       icon: 'https://qph.fs.quoracdn.net/main-thumb-t-2365696-100-eyzcdieyvqrecbkncuwmmputwczrexod.jpeg',
//       answers: 0
//     },
//     {
//       name: 'Français (langue)',
//       icon: 'https://qph.fs.quoracdn.net/main-thumb-t-2365818-100-ylwoccgbktbvlzqdlutnuhhpwxhftgta.jpeg',
//       answers: 0
//     }
//   ],
//   spaces: [],
//   followers: 8,
//   following: 6,
//   answers: 9,
//   questions: null,
//   shares: 11,
//   posts: null,
//   views: 45189,
//   lastMonthViews: 25303,
//   verified: false,
//   anonymous: false
// }
```

* ### fetchQuestion(url, options)

Allows, from a link to a Quora question, to obtain information such as the number of answers, the title of the question, the topics... The parameter { raw } is optional and must be a boolean. It allows you to obtain more complete data, but more difficult to use.

```js
const quora = require('quora');

quora.fetchQuestion('https://fr.quora.com/La-cam%C3%A9ra-frontale-d%C3%A9forme-t-elle-le-visage', { raw: false }).then(console.log); // Second parameter is optional

// Question {
//   title: 'La caméra frontale déforme-t-elle le visage ?',
//   url: 'https://fr.quora.com/La-caméra-frontale-déforme-t-elle-le-visage',
//   answers: 1,
//   topics: [
//     {
//       name: 'Photographie',
//       url: 'https://fr.quora.com/topic/Photographie'
//     },
//     {
//       name: 'Appareils photo',
//       url: 'https://fr.quora.com/topic/Appareils-photo'
//     },
//     {
//       name: 'Appareils photo numériques',
//       url: 'https://fr.quora.com/topic/Appareils-photo-numériques'
//     },
//     { name: 'Visages', url: 'https://fr.quora.com/topic/Visages' },
//     {
//       name: 'Reconnaissance faciale (techniques logicielles)',
//       url: 'https://fr.quora.com/topic/Reconnaissance-faciale-techniques-logicielles'
//     },
//     {
//       name: 'Caméras pour téléphones intelligents',
//       url: 'https://fr.quora.com/topic/Caméras-pour-téléphones-intelligents'
//     }
//   ]
// }
```

* ### fetchAnswer(url, options)

Allows, from a link to a Quora answer, to obtain information such as the number of views, the title of the question, the content of the question? The parameter { raw } is optional and must be a boolean. It allows you to obtain more complete data, but more difficult to use.

⚠ Does not currently support markdown, images or links

```js
const quora = require('quora');

quora.fetchAnswer('https://fr.quora.com/La-cam%C3%A9ra-frontale-d%C3%A9forme-t-elle-le-visage/answer/Simon-Leclere?ch=10&share=8cd864d7&srid=uz6vFe', { raw: false }).then(console.log); // Second parameter is optional

// Answer {
//   question: {
//     title: 'La caméra frontale déforme-t-elle le visage ?',
//     answerCount: 1,
//     url: 'https://fr.quora.com/La-caméra-frontale-déforme-t-elle-le-visage'
//   },
//   url: 'https://fr.quora.com/La-caméra-frontale-déforme-t-elle-le-visage/answer/Simon-Leclere',
//   content: 'Oui !\n' +
//     'Vous êtes vous déjà pris en photo avant de vous rendre compte que le résultat diffère complètement de ce que vous voyez habituellement le matin dans le reflet de votre miroir ?\n' +
//     "Si oui, c'est tout à fait normal, et je vais vous en expliquer la raison. Si non, vous êtes probablement un alien venu d'une autre dimension dans laquelle les selfies sont parfaits.\n" +
//     'Concrètement, lorsque vous vous prenez en photo en utilisant la caméra frontale de votre téléphone, votre nez semble plus gros, votre front plus grand et votre tête est déformée.\n' +
//     'Mais alors pourquoi ?\n' +
//     'La caméra frontale de votre smartphone est équipée de plusieurs lentilles et filtres qui ensemble forment un objectif. Cet objectif est conçu pour capturer des scènes larges afin de pouvoir vous prendre en photo, vous ainsi que le paysage derrière vous.\n' +
//     'Cette caractéristique est à double tranchant, car si a une distance normale elle permet de réussir ses photos de vacances, à une trop courte distance elle a pour effet de déformer le sujet, un peu comme les objectifs fish-eye.\n' +
//     "Ainsi, une étude a montré qu'un selfie pris à 30cm du sujet faisait apparaître son nez 30% plus grand par rapport à une photo prise à 1,50m.\n" +
//     '\n' +
//     'Ici, la photo de gauche est prise à 30cm tandis que la photo de droite est prise à environ 1,50m\n' +
//     "Crédit photo : Boris Paskhover, auteur de l'étude mentionnée ci-dessus\n" +
//     'Heureusement, il existe plusieurs solutions pour y remédier\n' +
//     'En premier lieu, la solution la plus simple est de prendre la photo de plus loin, pour cela un selfie-stick vous sera très utile.\n' +
//     "Une autre solution est d'utiliser le mode beauté intégré dans la majorité des applications photos, qui réduit les imperfections et atténue les déformations. Attendez vous néanmoins à voir disparaître toutes les irrégularités de votre peau au point qu'elle paraisse toute lisse (voir trop lisse).\n" +
//     "Enfin, il est toujours possible, après avoir pris la photo, de rendre à votre visage sa forme originale en retouchant la photo. Une des meilleures applications pour ca, selon mon expérience, est Snapseed de Google. Elle est très complète et intègre un outil simple de retouche pour corriger la déformation liée à l'objectif sur les visages.\n" +
//     '\n' +
//     'Courte démonstration des outils proposés par Google dans snapseed pour corriger la déformation des visages\n' +
//     "Et maintenant, c'est l'heure du chiffre magique qui fait peur\n" +
//     'En 2007, 55% des patients reçus par des chirurgiens plastiques souhaitaient améliorer leur apparence sur leur selfies, notamment grâce à une rhinoplastie.\n' +
//     "Oui oui, vous avez bien lu. Plus de la moitié des clients venaient simplement à cause d'une lentille grand angle sur leur smartphone. Effrayant n'est-ce pas ?\n" +
//     "Je ne peux qu'espérer que ce chiffre à diminué entre 2007 et 2020…",
//   creationDate: 1597599933265600,
//   author: User {
//     name: 'Simon Leclere',
//     description: null,
//     biography: null,
//     avatar: 'https://qph.fs.quoracdn.net/main-thumb-1099370703-200-rtyydeuedcynznijnnemevsxwfspapzo.jpeg',
//     url: 'https://fr.quora.com/profile/Simon-Leclere',
//     knowledges: null,
//     spaces: null,
//     followers: null,
//     following: null,
//     answers: null,
//     questions: null,
//     shares: null,
//     posts: null,
//     views: null,
//     lastMonthViews: null,
//     verified: false,
//     anonymous: false
//   },
//   shares: 1,
//   upvotes: 36,
//   views: 6891
// }
```

## Author

👤 **Simon Leclere**

* Github: [@SimonLeclere](https://github.com/SimonLeclere)

## 🤝 Contributors

* [@MRakox](https://github.com/MRakox/)

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/SimonLeclere/Quora-Data-Scraper/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Simon Leclere](https://github.com/SimonLeclere).<br />
This project is [MIT](https://github.com/SimonLeclere/Quora-Data-Scraper/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
