import {LogManager} from 'aurelia-framework';
let log = LogManager.getLogger('av::images');

import {Image} from './image';
import events from './events';



export class Images {

	constructor(){
		this.collection = [];
		this.active = null;
	}

	/**
	 * Add a new image to the image collection
	 * @param opts Object - Options which point to image file (local or remote)
	 */
	newImage (opts) {
		let id = this.collection.length + 1,
			newImage = new Image(id, opts);

		this.collection.push(newImage);
		log.info('created new image');

		this.setActiveImage(newImage);
	}

	setActiveImage(image){
		this.active = image;
		log.info('new active image set!');
		events.publish('image:active', image);
	}
}