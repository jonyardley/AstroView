define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'mods/images/images',
	'mods/preview/preview',
	'mods/fullImage/fullImage'
], function($, _, Backbone, Marionette, ImagesView, Preview, FullImage){

	
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
				App.Router.navigate('/', {replace: true, trigger: true});
			}
		},



		preview: function(fitsId){
			var model = App.fits.get(fitsId);
			if(model){
				App.content.show( new Preview({
					model: model
				}));
			}else{
				App.Router.navigate('/', {replace: true, trigger: true});
			}
		},



		header: function(fitsId){

		},



		other: function(){
			//redirect to index route!
		}

	}

	return controller;


});