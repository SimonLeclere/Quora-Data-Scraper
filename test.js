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