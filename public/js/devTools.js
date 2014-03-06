define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app'
],
function($, _, Backbone, Marionette, App){
	
	var dev = {

		files: [
			'/assets/example_fits/502nmos.fits'
			//'/assets/example_fits/m1-green.fits',
			//'/assets/example_fits/m1-red.fits'
		],

		count: 0,


		addImages: function(){
			
			if(dev.count < dev.files.length){
				//console.log('adding image:', dev.files[dev.count]);

				var image = App.fits.add({
					file: dev.files[dev.count]
				});

				dev.count++;

				image.on('change:imageData', dev.addImages);
			}
		},


		init: function(){

			//dev.addImages();

		}

	};

	return dev.init;

});