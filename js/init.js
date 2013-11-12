define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'mods/header/header',
	'mods/index/index',
	'mods/fits/fitsCollection',
	'mods/fullImage/fullImage'
], function(
	$,
	_,
	Backbone,
	Marionette,
	App,
	HeaderView,
	IndexView,
	FitsCollection,
	FullImage
){

	$(function(){
		
		App.start();
		
		//App View Listeners
		App.vent.on('fullImage', function(e){
			var fullImage = new FullImage({
				model: App.fits.at(e.index)
			});
			App.content.show(fullImage);
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

