var pjson = require('./package.json');

var config = {

	name: pjson.name,
	version: pjson.version,

	js: {
		src: './app/core/main.js',
		dist: './app/assets/js',
		output: 'bundle.js'
	}
};

module.exports = config;