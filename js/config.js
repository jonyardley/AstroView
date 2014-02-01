require.config({

	deps: ['init'],

	baseUrl: 'js',

	paths: {
		jquery: '../lib/jquery',
		underscore: '../lib/underscore',
		Marionette: '../lib/marionette',
		Backbone: '../lib/backbone',
		fits: '../lib/fits',
		Handlebars: '../lib/handlebars',
		text: '../lib/require.text',
		hbars: '../lib/hbars',
		mods: '../mods',
		dataModel: '../dataModel',
		fileInput: '../lib/file.input',
		ionSlider: '../lib/ion.rangeSlider.min',
		processing: '../lib/processing'
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
		},
		processing: {
			exports: 'Processing'
		}
	},

	hbars: {
		extension: '.hb',
	}

});