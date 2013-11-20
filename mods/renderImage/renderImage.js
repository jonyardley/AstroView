define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
], function($, _, Backbone, Marionette, App){


	var scale = function(value, fits){
		var output,
			scaleType = fits.options.scaleType,
			min = fits.options.min,
			max = fits.options.max;

		switch(scaleType){
			case 'linear':
				output = ((value + min) / max) * 255;
				break
			case 'sqrt':
				output = Math.sqrt((value + min) / max ) * 255;
				break
			case 'cuberoot':
				output = Math.pow((value + min) / max, 0.333) * 255;
				break
			case 'log':
				output = Math.log((value + min) / max ) * 255;
				break
			case 'loglog':
				output = Math.log(Math.log((value + min) / max )) * 255;
				break
			case 'sqrtlog':
				output = Math.sqrt(Math.log((value + min) / max )) * 255;
				break
		}

		return output;
	};

	return function(context, imageBuffer, imageScale, width, height, fits){
		
		var i, ii;
		var invImageScale = Math.floor(1 / imageScale);
		for(i=0; i < height; i++){
			var x = ( i * invImageScale ) * fits.image.width;
			for(ii=0; ii < width; ii++){
				var y = ii * invImageScale;
				var pixel = x+y;
				var index = ((i * width) + ii) * 4;
				var value = scale(fits.imageData[pixel], fits);

				imageBuffer.data[index+0] = value;
		    	imageBuffer.data[index+1] = value;
		    	imageBuffer.data[index+2] = value;
		    	imageBuffer.data[index+3] = 255;

			}
		}

		context.putImageData(imageBuffer, 0, 0);

	};

});