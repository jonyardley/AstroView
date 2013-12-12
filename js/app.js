define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette'
], function($, _, Backbone, Marionette){

	var App = new Marionette.Application();

	App.addRegions ({
		header: '#header',
		content: '#content',
		controls: '#controls'
	});

	App.env = (Backbone.history.location.hostname === 'localhost')? 'dev' : 'prod';

	window.App = App;
	
	return App;

});

