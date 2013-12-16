define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app'
],
function($, _, Backbone, Marionette, App){
	
	//img, r, g, b
	return function(opts){
		
		//TEMP CANVAS
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		
		canvas.width = opts.image.width;
		canvas.height = opts.image.height;

		ctx.fillStyle = 'rgb(0,0,0)';
		ctx.fillRect (0, 0, opts.image.width, opts.image.height);

		ctx.drawImage(opts.image, 0, 0);

		ctx.globalCompositeOperation = 'multiply';

		ctx.fillStyle = 'rgb('+opts.r+','+opts.g+','+opts.b+')';
		ctx.fillRect (0, 0, opts.image.width, opts.image.height);

		var imgData = canvas.toDataURL();
		var img = new Image();
		img.src = imgData;

		return img;

	}

});