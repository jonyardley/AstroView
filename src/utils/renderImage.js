import {LogManager} from 'aurelia-framework';
let log = LogManager.getLogger('av::renderImage');

import ImageBuffer from 'imageBuffer'; //Shimmed import

export class RenderImage {

	constructor(image, w, h){
		this.image = image;
		this.width = image.metaData.width;
		this.height = image.metaData.height;

		this.scale = 0.3;
		this.sample = Math.floor(1 / this.scale);
		this.targetWidth = Math.floor(this.width * this.scale);
		this.targetHeight = Math.floor(this.height * this.scale);

		this.canvas = document.createElement('canvas');
		this.canvas.width = this.targetWidth;
		this.canvas.height = this.targetHeight;
		this.ctx = this.canvas.getContext('2d');

		this.imageData = this.ctx.createImageData(this.targetWidth, this.targetHeight);
		this.buffer = new ImageBuffer(this.imageData);

		log.info('set data needed for image render');

		this.renderPixels();

		//Generate Image from buffer!
		this.result = this.buffer.createImage();
		
	}

	renderPixels(){

		log.info('Start rendering pixels');
		log.warn('TODO: MAKE THIS ASYNC / NON BLOCKING');
		log.warn('TODO: THIS IS NOT WORKING CORRECTLY! MAKE THIS WORK WHEN SCALING!');

		var area = this.targetWidth * this.targetHeight;
		var min = 0,
			max = 1000,
			row = 0;

		for (var i=0; i < area; i++) {
			var pixelIndex = (i*this.sample) + (row*this.targetWidth);
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

			if(i % this.width === 0){
				row++;
			}
		}

		log.info('Finished rendering pixels');
	}



}