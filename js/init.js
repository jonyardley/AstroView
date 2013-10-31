define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'mods/header/header',
	'mods/index/index',
	'mods/fits/fitsCollection'
], function(
	$,
	_,
	Backbone,
	Marionette,
	App,
	HeaderView,
	IndexView,
	FitsCollection
){

	$(function(){
		
		App.start();

		App.fits = new FitsCollection();

		App.header.show(new HeaderView());
		App.content.show(new IndexView());

	});

});

