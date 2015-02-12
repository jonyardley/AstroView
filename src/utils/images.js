import {Image} from './image';

export class Images {

	constructor(){
		this.collection = [];
	}

	/**
	 * Add a new image to the image collection
	 * @param opts Object - Options which point to image file (local or remote)
	 */
	newImage (opts) {
		let id = this.collection.length + 1,
			newImage = new Image(id, opts);

		this.collection.push(newImage);
	}
}