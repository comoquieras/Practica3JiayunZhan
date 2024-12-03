module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{html}',
		'bootstrap-5.3.2-dist/**/*.{css,js}',             // Include Bootstrap files
		'static/**/*.{js,css}',                          // Include static files
		'images/*.{png}',                          		 // Include image files
		'workbox-1f73f963.js',                           // Include Workbox file
		'manifest.json',                                 // Include manifest file
		'robots.txt',                                    // Include robots.txt file
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	skipWaiting: true,
	clientsClaim: true,
};
