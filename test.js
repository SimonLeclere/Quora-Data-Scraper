const quora = require('./index');

// quora.fetchUser('https://fr.quora.com/profile/Simon-Leclere').then(console.log);
// quora.fetchQuestion('https://fr.quora.com/La-cam%C3%A9ra-frontale-d%C3%A9forme-t-elle-le-visage').then(console.log);
quora.fetchAnswer('https://fr.quora.com/La-cam%C3%A9ra-frontale-d%C3%A9forme-t-elle-le-visage/answer/Simon-Leclere?ch=10&share=8cd864d7&srid=uz6vFe').then(console.log);