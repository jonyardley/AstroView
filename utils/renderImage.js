var ImageBuffer = require('imageBuffer');


function RenderImage (image, scale) {

	this.image = image;
	this.width = image.metaData.width;
	this.height = image.metaData.height;
	this.scale = scale || 1;
	this.sample = Math.floor(1 / this.scale);
	this.targetWidth = this.width * this.scale;
	this.targetHeight = this.height * this.scale;

	this.canvas = document.createElement('canvas');
	this.canvas.width = this.targetWidth;
	this.canvas.height = this.targetHeight;
	this.ctx = this.canvas.getContext('2d');

	this.imageData = this.ctx.createImageData(this.targetWidth, this.targetHeight);
	this.buffer = new ImageBuffer(this.imageData);

	console.log('set data needed for image render');

	this.renderPixels();

	//Generate Image from buffer!
	this.result = this.buffer.createImage();

}

RenderImage.prototype.renderPixels = function(){

	console.log('Start rendering pixels');
	console.log('TODO: MAKE THIS ASYNC / NON BLOCKING');

	var area = this.targetWidth * this.targetHeight;
	var min = 0,
		max = 1000,
		x = 0,
		y = 0;

	for (var i=0; i < area; i++) {

		var pixelIndex = (x * this.sample) + ((y * this.sample) * this.width);
		var value = this.image.imageData[pixelIndex];
		var v = ((value + min) / max) * 255 || 0;

		//clamp
		if(v < 0){ v = 0; }
		if(v > 255 || isNaN(v)){ v = 255; }

		var r = v,
			g = v,
			b = v,
			a = 255;

		// set the pixel, using original alpha
		this.buffer.setPixel(i, r, g, b, a);

		if(i % this.targetWidth === 0){
			x = 0;
			y++;
		}else{
			x++;
		}

	}

	console.log('Finished rendering pixels');

}

module.exports = RenderImage;