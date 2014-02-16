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
		var width = opts.width || opts.fits.image.width;
		var height = opts.height || opts.fits.image.height;

		canvas.width = width;
		canvas.height = height;

		var ctx = canvas.getContext('2d');

		var buffer = ctx.createImageData(canvas.width, canvas.height);

		var i, ii;
		var invScale = Math.floor(1 / opts.scale);
		for(i=0; i < height; i++){
			var x = ( i * invScale ) * opts.fits.image.width;
			for(ii=0; ii < width; ii++){
				var y = ii * invScale;
				var pixel = x+y;
				var index = ((i * width) + ii) * 4;
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
		//clear
		canvas.width = canvas.width;

		//flip
		ctx.translate(0, height);
		ctx.scale(1,-1);
		ctx.drawImage(img, 0, 0);


		imgData = canvas.toDataURL();
		img = new Image();
		img.src = imgData;


		return img;

	};

});