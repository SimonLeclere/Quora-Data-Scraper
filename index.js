const fetch = require('node-fetch');
const { load } = require('cheerio');

exports.fetchUser = async (url) => {
  // 1 - Récuperer le contenu de la page web.
  const req = await fetch(url);
  const html = await req.text();

  const $ = load(html);

  // 2 - Query pour la récupération des donnèes de la page au format JSON.
  const query = 'window.ansFrontendGlobals.data.inlineQueryResults.results';

  const scripts = $('script').filter(function () {
    return ($(this).html().indexOf(query) > -1);
  });

  const script = $(scripts[2]).html();
  const window = script.substring(script.indexOf(`${query}[`) + (query.length + 70));
  const data = window.substring(0, window.indexOf('}";') + 2);
  const json = JSON.parse(data.trim());

  const { data: { user } } = JSON.parse(json);

  // 3 - Analysation et utilisation des données.
  const biography = JSON.parse(user.description).sections.map(({ spans }) => {
    return spans.map((span) => span.text).join('');
  }).join('\n');

  const knowledges = user.expertiseTopicsConnection.edges.map(({ node: topic }) => {
    return {
      name: topic.name,
      icon: topic.photoUrl,
    };
  });

  const spaces = user.followingTribesConnection.edges.map(({ node: space }) => {
    return {
      name: JSON.parse(space.name).sections.map(({ spans }) => {
        return spans[0].text;
      })[0],
      icon: space.iconUrl,
    };
  });

  return {
    name: user.names[0].reverseOrder ? `${user.names[0].givenName} ${user.names[0].familyName}` : `${user.names[0].familyName} ${user.names[0].givenName}`,
    description: user.profileCredential.experience,
    biography,
    avatar: user.profileImageUrl,
    knowledges,
    spaces,
    followers: user.followingCount,
    answers: user.numPublicAnswers,
    questions: user.numProfileQuestions,
    shares: user.quoraSharesCount,
    posts: user.numTribePosts,
  };
}
