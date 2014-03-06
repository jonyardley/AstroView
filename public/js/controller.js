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

			App.content.show(new ImagesView());

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

		externalFile: function(url){
			var newImage = App.fits.add({
				file: '/remoteFits?url=' + url
			});
			App.Router.navigate('#/images', {trigger: true, replace: true});
		},



		other: function(){
			App.Router.navigate('#/', {trigger: true});
		}

	};

	return controller;


});