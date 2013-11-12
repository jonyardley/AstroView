define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'mods/header/header',
	'mods/index/index',
	'mods/fits/fitsCollection',
	'mods/fullImage/fullImage',
	'mods/fitsHeader/header'
], function(
	$,
	_,
	Backbone,
	Marionette,
	App,
	HeaderView,
	IndexView,
	FitsCollection,
	FullImage,
	FitsHeader
){

	$(function(){
		
		App.start();
		
		//App View Listeners
		App.vent.on('fullImage', function(model){
			var fullImage = new FullImage({
				model: model
			});
			App.content.show(fullImage);
		});


		App.vent.on('header', function(model){
			var fitsHeader = new FitsHeader({
				model: model
			});
			App.content.show(fitsHeader);
		});

		App.vent.on('loaderHide', function(){
			$('#loader').fadeOut('fast');
		});

		App.vent.on('loaderShow', function(){
			$('#loader').show();
		});

		//Setup global collections
		App.fits = new FitsCollection();


		//render content
		App.header.show(new HeaderView());
		App.content.show(new IndexView());

	});

});

