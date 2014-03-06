require.config({

	deps: ['js/init'],

	baseUrl: '/',

	paths: {
		jquery: 'lib/jquery',
		underscore: 'lib/underscore',
		Marionette: 'lib/marionette',
		Backbone: 'lib/backbone',
		fits: 'lib/fits',
		Handlebars: 'lib/handlebars',
		text: 'lib/require.text',
		hbars: 'lib/hbars',
		dataModel: 'dataModel',
		fileInput: 'lib/file.input',
		ionSlider: 'lib/ion.rangeSlider.min',
		app: 'js/app',
		controller: 'js/controller',
		devTools: 'js/devTools',
		router: 'js/router'
	},

	shim: {
		jquery: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		},
		Backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		Marionette: {
			deps: ['jquery', 'underscore', 'Backbone'],
			exports: 'Marionette'
		},
		fits: {
			exports: 'astro'
		},
		Handlebars: {
			exports: 'Handlebars'
		},
		fileInput: {
			deps: ['jquery']
		},
		ionSlider: {
			deps: ['jquery']
		}

	},

	hbars: {
		extension: '.hb'
	}

});