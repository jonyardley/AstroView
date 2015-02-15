var _astro = require('fitsjs'),
	FITS = _astro.astro.FITS;

window.astro = _astro.astro; //Hack to stop fitsjs breaking!

function Image (opts){

	this.file = opts.file;
	this.loaded = false;
	this.img = {};
	this._dirty = true;

	this.loadImage();

}

Image.prototype.loadImage = function(){
	var fits = new FITS(this.file, this.onLoad.bind(this));
};

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

Image.prototype.getImageData = function(imageData) {
	this.imageData = imageData;
	this.isLoaded = true;
	this.trigger('image:loaded', this);
	this.renderImage();
}

Image.prototype.renderImage = function(){
	/**var thumbScale = this.getscale(50),
		thumb = new RenderImage(this, thumbScale);
	this.img.thumb = thumb.result;

	var raw = new RenderImage(this);
	this.img.raw = raw.result;

	events.publish('image:rendered', this);**/

	this._dirty = false;
	this.trigger('image:rendered', this);

}


Image.prototype.loadError = function(){
	window.alert('For some reason that file couldn\'t be loaded');
};


module.exports = Image;