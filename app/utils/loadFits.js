var astro = require('fits').astro;

function loadFits(fitsModel, callback){

	var fitsLoader;


	function getImageData(imageData) {
		fitsModel.attributes.imageData = imageData;
		fitsModel.set('loading.state', 'complete');
		fitsModel.set('loading.progress', 100);
		if(callback){
			callback(fitsModel);
		}

	}


	function error() {
		window.alert('For some reason that file couldn\'t be loaded');
		fitsModel.set('loading.state', 'error');
	}


	function onLoad(fits, opts) {

		if (fits.hdus.length > 0) {

			fitsModel.set('header', this.getHeader());
			fitsModel.set('meta', this.getDataUnit());

			var image = fitsModel.get('meta');

			//Assumes that each image only has one frame!
			image.getFrame(0, getImageData);

		} else {
			loadFits.error();
		}

	}


	function onprogress(xhr) {
		var loaded = xhr.loaded || xhr.position,
			total = xhr.total || xhr.totalSize;

		if (loaded && total) {
			var perc = Math.round((loaded / total) * 100);
			fitsModel.set('loading.state', 'loading');
			fitsModel.set('loading.progress', perc);
		}
	}

	fitsLoader = new astro.FITS(fitsModel.get('file'), onLoad, {
		onprogress: onprogress
	});

}

module.exports = loadFits;