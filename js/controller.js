define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'mods/images/images',
	'mods/scale/view',
	'mods/fullImage/fullImage',
	'mods/fitsHeader/header'
], function($, _, Backbone, Marionette, App, ImagesView, ScaleView, FullImage, HeaderView){

	
	var controller = {


		images: function(){

			App.content.show(new ImagesView({
				collection: App.fits
			}));

		},


		image: function(fitsId){
			
			var model = App.fits.get(fitsId);
			
			if(model){
				var fullImage = new FullImage({
					model: model
				});
				App.content.show(fullImage);
			}else{
				controller.other();
			}

		},



		scale: function(fitsId){
			
			var model = App.fits.get(fitsId);
			
			if(model){
				App.content.show( new ScaleView({
					model: model
				}));
			}else{
				controller.other();
			}
			
		},



		header: function(fitsId){

			var model = App.fits.get(fitsId);
			if(model){
				var headerView = new HeaderView({
					model: model
				});
				App.content.show(headerView);
			}else{
				controller.other();
			}

		},



		other: function(){
			App.Router.navigate('/', {replace: true, trigger: true});
		}

	};

	return controller;


});