define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app'
],
function($, _, Backbone, Marionette, App){
	
	return function(value, fits){
		var output,
			scaleType = fits.options.scaleType,
			min = fits.options.min,
			max = fits.options.max;

		switch(scaleType){
			case 'linear':
				output = ((value + min) / max) * 255;
				break;
			case 'sqrt':
				output = Math.sqrt((value + min) / max ) * 255;
				break;
			case 'cuberoot':
				output = Math.pow((value + min) / max, 0.333) * 255;
				break;
			case 'log':
				output = Math.log((value + min) / max ) * 255;
				break;
			case 'loglog':
				output = Math.log(Math.log((value + min) / max )) * 255;
				break;
			case 'sqrtlog':
				output = Math.sqrt(Math.log((value + min) / max )) * 255;
				break;
		}

		return output;
	};

});