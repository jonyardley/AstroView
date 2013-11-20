define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'./router',
	'mods/header/header',
	'mods/images/images',
	'mods/fits/fitsCollection',
	'mods/fullImage/fullImage',
	'mods/fitsHeader/header'
], function(
	$,
	_,
	Backbone,
	Marionette,
	App,
	router,
	HeaderView,
	ImagesView,
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


		//Add router and kick off Backbone history
		
		App.Router = router;
		Backbone.history.start({});


		//render content
		App.header.show(new HeaderView());
		App.content.show(new ImagesView());

	});

});

