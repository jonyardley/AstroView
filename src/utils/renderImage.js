import ImageBuffer from 'imageBuffer'; //Shimmed import

export class RenderImage {

	constructor(image){
		this.image = image;
		this.width = image.metaData.width;
		this.height = image.metaData.height;
		this.canvas = document.createElement('canvas');
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.ctx = this.canvas.getContext('2d');
		this.imageData = this.ctx.createImageData(this.width, this.height);
		this.buffer = new ImageBuffer(this.imageData);

		this.renderPixels();

		//render image on canvas
		this.ctx.putImageData(this.imageData, 0, 0);
		var img = new Image();
		img.src = this.canvas.toDataURL();
		image.img.raw = img;
		
	}

	renderPixels(){
		var area = this.width * this.height;
		var min = 0,
			max = 1000;

		for (var i=0; i < area; i++) {
			var value = this.image.imageData[i];
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
		}
	}



}