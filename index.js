const fetch = require('node-fetch');
const { load } = require('cheerio');
const User = require('./src/User');
const Answer = require('./src/Answer');
const Question = require('./src/Question');

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
	return new User({
		name: user.names[0].reverseOrder ? `${user.names[0].familyName} ${user.names[0].givenName}` : `${user.names[0].givenName} ${user.names[0].familyName}`,
		description: user.profileCredential ? user.profileCredential.experience : undefined, // Use ?. operator when nodeJS v14 will be stable
		biography: biography,
		url: user.profileUrl,
		avatar: user.profileImageUrl,
		knowledges: knowledges,
		spaces: spaces,
		followers: user.followerCount,
		following: user.followingCount,
		answers: user.numPublicAnswers,
		questions: user.numProfileQuestions,
		shares: user.quoraSharesCount,
		posts: user.numTribePosts,
		views: user.allTimePublicAnswerViews,
		lastMonthViews: user.lastMonthPublicContentViews,
		verified: user.isVerified,
		anonymous: user.isAnon
	});
}

exports.fetchAnswer = async (url, options) => {

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

	const { data: { answer } } = JSON.parse(json);

	// Si l'option raw vaut true, renvoyer les données brutes
	if(raw) return answer;

	// Analyse des données
	const questionTitle = JSON.parse(answer.question.title).sections.map(({ spans }) => {
		return spans.map((span) => span.text).join('');
	}).join('\n');

	// Analyse des données
	const content = JSON.parse(answer.content).sections.map(({ spans }) => {
		return spans.map((span) => span.text).join('');
	}).join('\n');

	return new Answer({
		question: {
			title: questionTitle,
			answerCount: answer.question.answerCount,
			url: answer.question.url
		},
		url: answer.permaUrl,
		content: content,
		creationDate: answer.creationTime,
		author: new User({
			name: answer.author.names[0].reverseOrder ? `${answer.author.names[0].familyName} ${answer.author.names[0].givenName}` : `${answer.author.names[0].givenName} ${answer.author.names[0].familyName}`,
			avatar: answer.author.profileImageUrl,
			url: answer.author.profileUrl,
			verified: answer.author.isVerified,
			experience: answer.authorCredential ? answer.authorCredential.experience : null,
			anonymous: answer.author.isAnon
		}),
		shares: answer.numSharers,
		upvotes: answer.numUpvotes,
		views: answer.numViews,
	});
}


exports.fetchQuestion = async (url, options) => {

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

	const { data: { question } } = JSON.parse(json);

	if(raw) return JSON.parse(json);

	const questionTitle = JSON.parse(question.title).sections.map(({ spans }) => {
		return spans.map((span) => span.text).join('');
	}).join('\n');

	const topics = question.topics.map(topic => {
		return {
			name: topic.name,
			url: topic.url
		};
	});

	return new Question({
		title: questionTitle,
		url: question.url,
		answers: question.answerCount,
		topics: topics
	});
}