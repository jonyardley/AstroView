define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'./applyColour',
],
function($, _, Backbone, Marionette, App, applyColour){
	
	var ci = {

		getMax: function(array, key){
			return _.max(array, function(item){
				return item[key];
			})[key];
		},

		clearCanvas: function(){
			ci.ctx.clearRect(0, 0, ci.width, ci.height);	
		},

		devColors: [
			{r: 255, g: 0, b: 0},
			{r: 0, g: 0, b: 255},
			{r: 0, g: 255, b: 0}
		],

		addImage: function(model){
			if(model.get('imageData')){
				var image = model.getFullImage();

				var colourImage = applyColour({
					image: image,
					r: ci.devColors[model.get('id')-1].r,
					g: ci.devColors[model.get('id')-1].g,
					b: ci.devColors[model.get('id')-1].b
				});

				ci.ctx.globalCompositeOperation = 'screen';
				ci.ctx.drawImage(colourImage, 0, 0);
			}
		},

		setCanvasSize: function(){
			var imageSizes = App.fits.map(function(fits){
				var image = fits.get('image');
				return {
					width: (image)? image.width : 0,
					height: (image)? image.height : 0
				};
			});
			
			ci.width = ci.getMax(imageSizes, 'width');
			ci.height = ci.getMax(imageSizes, 'height');

			ci.canvas.width = ci.width;
			ci.canvas.height = ci.height;

			ci.clearCanvas();
			App.fits.each(ci.addImage);

		},


		init: function(canvasId){
			ci.canvas = document.getElementById(canvasId);
			ci.ctx = ci.canvas.getContext('2d');

			//get vanvas size if there are already images
			if(App.fits.length > 0 && App.fits.at(0).get('imageData')){
				ci.setCanvasSize();
			}

			//listen to new images being added to create canvas size;
			App.fits.on('change:imageData', ci.setCanvasSize);
		}

	};

	return ci;

});