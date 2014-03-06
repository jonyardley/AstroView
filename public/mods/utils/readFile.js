define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'fits'
], function($, _, Backbone, Marionette, App, astro){

	var fileReader = {

		
		getImageData: function(imageData){
			fileReader.fitsModel.set('imageData', imageData);
		},

		error: function(){
			var model = fileReader.fitsModel;
			model.trigger('destroy', model, model.collection, {});
			App.vent.trigger('loaderHide');
			window.alert('For some reason that file couldn\'t be loaded');
		},


		onLoad: function(fits, opts){

			if(fits.hdus.length > 0){

				fileReader.fitsModel.set('header', this.getHeader());
				fileReader.fitsModel.set('image', this.getDataUnit());

				var image = fileReader.fitsModel.get('image');
				image.getFrame(0, fileReader.getImageData);
			}else{
				fileReader.error();
			}

		},


		init: function(fitsModel){
			fileReader.fitsModel = fitsModel;
			fileReader.fitsLoader = new astro.FITS(fitsModel.get('file'), fileReader.onLoad);
		}

	};

	return fileReader.init;

});

