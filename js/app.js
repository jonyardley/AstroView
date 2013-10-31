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

	window.App = App;
	
	return App;

});

