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


		onLoad: function(fits){

			fileReader.fitsModel.set('header', this.getHeader());
			fileReader.fitsModel.set('image', this.getDataUnit());

			var image = fileReader.fitsModel.get('image');
			image.getFrame(0, fileReader.getImageData);
		},


		init: function(fitsModel){
			fileReader.fitsModel = fitsModel;
			fileReader.fitsLoader = new astro.FITS(fitsModel.get('file'), fileReader.onLoad);
		}

	};

	return fileReader.init;

});

