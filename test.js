const quora = require('./index');

quora.fetchUser('https://www.quora.com/profile/James-Altucher?q=j').then(console.log);

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