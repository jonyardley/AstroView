define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'mods/index/view',
	'mods/images/views/imagesLayout',
	'mods/scale/view',
	'mods/fullImage/fullImage',
	'mods/fitsHeader/header',
], function($, _, Backbone, Marionette, App, IndexView, ImagesView, ScaleView, FullImage, HeaderView){

	
	var controller = {

		index: function(){
			App.content.show(new IndexView());
		},


		images: function(){

			if(App.fits.length > 0){

				App.content.show(new ImagesView());

			}else{
				controller.other();
			}

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
			App.Router.navigate('#/', {trigger: true});
		}

	};

	return controller;


});