define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'./scale'
], function($, _, Backbone, Marionette, App, scale){

	return function(imageBuffer, imageScale, width, height, fits){

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

		return imageBuffer;

	};

});