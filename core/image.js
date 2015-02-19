var _astro = require('fitsjs'),
	FITS = _astro.astro.FITS,
	RenderImage = require('./renderImage');

window.astro = _astro.astro; //Hack to stop fitsjs breaking!

function Image (opts, parent){

	this.parent = parent;
	this.file = opts.file;
	this.isLoaded = false;
	this.img = {};
	this._dirty = true;


	//Load image into memory!
	this.loadImage();

}


/**
 * Kick of Load Image
 */
Image.prototype.loadImage = function(){
	var fits = new FITS(this.file, this.onLoad.bind(this));
};


/**
 * Get Image data on load complete!
 * @param fits
 */
Image.prototype.onLoad = function(fits){
	if (fits.hdus.length > 0) {

		this.header = fits.getHeader();
		this.metaData = fits.getDataUnit();

		//Assumes that each image only has one frame!
		this.metaData.getFrame(0, this.getImageData.bind(this));

	} else {
		this.loadError();
	}
};


/**
 * Set Image data from frame then render image!
 * @param imageData
 */
Image.prototype.getImageData = function(imageData) {
	this.imageData = imageData;
	this.isLoaded = true;
	this.trigger('image:loaded', this);
	this.parent.trigger('image:loaded', this);
	this.renderImage();
}

/**
 * Calculate scale from a desired width
 * @param w
 * @returns {number}
 */
Image.prototype.getscale = function(w) {
	return w / this.metaData.width;
}

/**
 * Render the image (raw & thumb)
 */
Image.prototype.renderImage = function(){
	var thumbScale = this.getscale(50),
		thumb = new RenderImage(this, thumbScale);
	this.img.thumb = thumb.result;

	var raw = new RenderImage(this);
	this.img.raw = raw.result;

	this._dirty = false;
	this.trigger('image:rendered', this);
	this.parent.trigger('image:rendered', this);

}


Image.prototype.loadError = function(){
	window.alert('For some reason that file couldn\'t be loaded');
};


module.exports = Image;