var scaleFunc = require('./scale'),
	processArray= require('./processArray');


//width, height, fits
function renderImage(opts, callback){

	//TEMP CANVAS
	var canvas = document.createElement('canvas'),
		width = opts.width || opts.fits.meta.width,
		height = opts.height || opts.fits.meta.height,
		scale = opts.scale ||  (width / opts.fits.meta.width),
		invScale = Math.floor(1 / scale);

	canvas.width = width;
	canvas.height = height;

	var ctx = canvas.getContext('2d'),
		buffer = ctx.createImageData(canvas.width, canvas.height);

	var indexArray = [], i, ii;

	for (i = 0; i < height; i++){
		indexArray[i] = i;
	}

	function process(index){

		i = index;
		var x = ( i * invScale ) * opts.fits.meta.width;

		for(ii=0; ii < width; ii++){
			var y = ii * invScale,
				pixel = x + y,
				z = ( ( (height - i) * width ) + ii ) * 4,
				value = scaleFunc( opts.fits.imageData[pixel], opts.fits );

			buffer.data[z+0] = value || 0;
			buffer.data[z+1] = value || 0;
			buffer.data[z+2] = value || 0;
			buffer.data[z+3] = 255;
		}

	}


	function done(){
		ctx.putImageData(buffer, 0, 0);
		ctx.globalCompositeOperation = "multiply";
		ctx.rect(1, 1, canvas.width, canvas.height);
		ctx.fillStyle = opts.fits.options.color;
		ctx.fill();

		var imgData = canvas.toDataURL();
		var img = new Image();
		img.src = imgData;
		
		if(callback) {
			callback(img);
		}
	}

	processArray(indexArray, process, done);

}

module.exports = renderImage;
