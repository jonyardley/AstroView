define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'mods/header/header',
	'mods/readFile/readFile',
	'mods/preview/preview'
], function($, _, Backbone, Marionette, App, HeaderView, readFile, Preview){

	$(function(){
		
		App.start();

		App.header.show(new HeaderView());

	});

});

