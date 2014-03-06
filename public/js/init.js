define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'./router',
	'./devTools',
	'dataModel/fits/fitsCollection',
	'mods/header/header'
], function(
	$, _, Backbone, Marionette, App, router,
	devTools, FitsCollection, HeaderView
){

	$(function(){
		
		App.start();
		

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

		if(App.env === 'dev'){
			devTools();
		}

	});

});

