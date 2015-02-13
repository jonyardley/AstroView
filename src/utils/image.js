import {LogManager} from 'aurelia-framework';
let log = LogManager.getLogger('av::image');

import astro from 'fitsjs'; //available globally with astro.FITS
import {RenderImage} from './renderImage';

export class Image {

	constructor (id, opts) {
		this.id = id;
		this.opts = opts;
		this.loaded = false;
		this.img = {};

		this.loadImage(opts.file);
	}

	loadImage(file){
		log.info('Attempting to load file');
		var fits = new astro.FITS(file, this.onLoad.bind(this));
	}

	onLoad(fits, opts){

		log.info('Attempting to get image data');

		if (fits.hdus.length > 0) {

			this.header = fits.getHeader();
			this.metaData = fits.getDataUnit();

			//Assumes that each image only has one frame!
			this.metaData.getFrame(0, this.getImageData.bind(this));

		} else {
			this.loadError();
		}
	}

	getImageData (imageData) {
		log.info('Image load complete!');
		this.imageData = imageData;
		this.isLoaded = true;
		new RenderImage(this);
	}

	loadError () {
		log.error('Couldn\'t load image', this);
		window.alert('For some reason that file couldn\'t be loaded');
	}
}