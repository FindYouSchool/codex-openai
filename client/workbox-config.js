module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{svg,png,html,json,ico,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};