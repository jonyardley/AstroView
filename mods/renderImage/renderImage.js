define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'./scale'
], function($, _, Backbone, Marionette, App, scale){

	//scale, width, height, fits
	return function(opts){
 
		//TEMP CANVAS
		var canvas = document.createElement('canvas');
		canvas.width = opts.width;
		canvas.height = opts.height;

		var ctx = canvas.getContext('2d');

		var buffer = ctx.createImageData(opts.width, opts.height);

		var i, ii;
		var invScale = Math.floor(1 / opts.scale);
		for(i=0; i < opts.height; i++){
			var x = ( i * invScale ) * opts.fits.image.width;
			for(ii=0; ii < opts.width; ii++){
				var y = ii * invScale;
				var pixel = x+y;
				var index = ((i * opts.width) + ii) * 4;
				var value = scale(opts.fits.imageData[pixel], opts.fits);

				buffer.data[index+0] = value;
				buffer.data[index+1] = value;
				buffer.data[index+2] = value;
				buffer.data[index+3] = 255;

			}
		}

		ctx.putImageData(buffer, 0, 0);
		var imgData = canvas.toDataURL();
		var img = new Image();
		img.src = imgData;

		return img;

	};

});