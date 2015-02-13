import {LogManager} from 'aurelia-framework';
let log = LogManager.getLogger('av::images');

import {Image} from './image';

export class Images {

	constructor(){
		this.collection = [];
		this.active = null;

		this.newImage({file: '/assets/fits/656nmos.fits'});
	}

	/**
	 * Add a new image to the image collection
	 * @param opts Object - Options which point to image file (local or remote)
	 */
	newImage (opts) {
		let id = this.collection.length + 1,
			newImage = new Image(id, opts);

		this.collection.push(newImage);
		this.active = newImage;
		log.info('created new image', this);
	}
}