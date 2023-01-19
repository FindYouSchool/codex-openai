module.exports = {
	globDirectory: 'client/',
	globPatterns: [
		'**/*.{svg,png,html,json,ico,js,css}'
	],
	swDest: 'client/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};