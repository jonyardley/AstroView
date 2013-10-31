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
			App.fits.imageData = imageData;
			App.vent.trigger('fits:loaded');
		},


		onLoad: function(fits){

			App.fits = {
				header: this.getHeader(),
				image: this.getDataUnit(),
			};

			App.fits.image.getFrame(0, fileReader.getImageData);
		},


		init: function(){
			this.fits = new astro.FITS(App.selectedFile, fileReader.onLoad);
		}

	};

	App.vent.on('file:selected', fileReader.init);

});

