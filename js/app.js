define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette'
], function($, _, Backbone, Marionette){

	var App = new Marionette.Application();

	App.addRegions ({
		header: '#header',
		content: '#content'
	});

	window.App = App;
	
	return App;

});

