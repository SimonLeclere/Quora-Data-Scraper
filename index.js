const puppeteer = require('puppeteer');

exports.fetchUser = async () => {
  // 1 - Créer une instance de navigateur
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // 2 - Naviguer jusqu'à l'URL cible
  await page.goto('https://fr.quora.com/profile/Elodie-Bechu');

  if (await page.$('.qu-px--large > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)') !== null) {
    await page.click('.qu-px--large > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)');
    await page.waitFor(1000);
  } 

  if (await page.$('.czFyoi') !== null) {
    await page.click('.czFyoi');
    await page.waitFor(1000);
  } 

  // 3 - Récupérer les données
  const result = await page.evaluate(() => {
    let name = document.querySelector('.q-text .qu-bold').innerText;
    let description = document.querySelector('.q-text .qu-fontSize--large').innerText;
    let biography = document.querySelector('.q-box .qu-mt--small').innerText;
    let avatar = document.querySelector('.qu-px--large > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > img:nth-child(2)').getAttribute('src');
    let knowledges = [...document.querySelectorAll('.qu-mt--small .q-box .qu-flex--auto .q-text .qu-color--gray_dark .qu-cursor--pointer')].map(e => e.innerText);
    let spaces = [...document.querySelectorAll('.q-box .qu-pb--medium .qu-flex--auto .q-text .qu-color--gray_dark .qu-cursor--pointer')].map(e => e.innerText);
    let followers = document.querySelector('div.q-click-wrapper:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').innerText.replace(/ ?abonnés?/, '');
    let answers = document.querySelector('.qu-color--red').innerText.split(' Réponses')[0];
    let questions = document.querySelector('div.qu-display--inline-block:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').innerText.replace(/ ?questions?/, '');
    let shares = document.querySelector('div.q-click-wrapper:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').innerText.replace(/ ?partages?/, '');
    let posts = document.querySelector('div.q-click-wrapper:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').innerText.replace(/ ?publications?/, '');

    return { name, description, biography, avatar, knowledges, spaces, followers, answers, questions, shares, posts }
  })

  // 4 - Retourner les données (et fermer le navigateur)
  browser.close()
  return result
}