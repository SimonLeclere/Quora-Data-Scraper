const fetch = require('node-fetch');
const { load } = require('cheerio');

exports.fetchUser = async (url, options) => {

  // Vérification des paramètres optionnels
  const raw = options && typeof options === 'object' && options.raw && typeof options.raw === 'boolean' ? options.raw : false;

  // Récupération du contenu de la page web
  const req = await fetch(url);
  const html = await req.text();

  const $ = load(html);

  // Query pour la récupération des données de la page au format JSON
  const query = 'window.ansFrontendGlobals.data.inlineQueryResults.results';

  const scripts = $('script').filter(function () {
    return ($(this).html().indexOf(query) > -1);
  });

  const script = $(scripts[2]).html();
  const window = script.substring(script.indexOf(`${query}[`) + (query.length + 70));
  const data = window.substring(0, window.indexOf('}";') + 2);
  const json = JSON.parse(data.trim());

  const { data: { user } } = JSON.parse(json);

  // Si l'option raw vaut true, renvoyer les données brutes
  if(raw) return user;

  // Analyse des données
  const biography = JSON.parse(user.description).sections.map(({ spans }) => {
    return spans.map((span) => span.text).join('');
  }).join('\n');

  const knowledges = user.expertiseTopicsConnection.edges.map(({ node: topic }) => {
    return {
      name: topic.name,
      icon: topic.photoUrl,
      answers: topic.numPublicAnswersOfUser
    };
  });

  const spaces = user.followingTribesConnection.edges.map(({ node: space }) => {
    return {
      name: JSON.parse(space.name).sections.map(({ spans }) => {
        return spans[0].text;
      })[0],
      icon: space.iconUrl,
      items: space.numItemsOfUser
    };
  });

  // Retour des données formatées
  return {
    name: user.names[0].reverseOrder ? `${user.names[0].familyName} ${user.names[0].givenName}` : `${user.names[0].givenName} ${user.names[0].familyName}`,
    description: user.profileCredential ? user.profileCredential.experience : undefined || null, // Use ?. operator when nodeJS v14 will be stable
    biography: biography || null,
    avatar: user.profileImageUrl || null,
    knowledges: knowledges || null,
    spaces: spaces || null,
    followers: user.followerCount || null,
    following: user.followingCount || null,
    answers: user.numPublicAnswers || null,
    questions: user.numProfileQuestions || null,
    shares: user.quoraSharesCount || null,
    posts: user.numTribePosts || null,
    views: user.allTimePublicAnswerViews || null,
    lastMonthViews: user.lastMonthPublicContentViews || null,
    verified: user.isVerified || null,
  };
}