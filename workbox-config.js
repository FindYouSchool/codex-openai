module.exports = {
	globDirectory: 'client/',
	globPatterns: [
		'**/*.{svg,png,html,json,ico,js,css}'
	],
	swDest: 'client/sr-sw.js',
	swDest: 'client/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};