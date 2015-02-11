import {Image} from './image';

export class Images {

	constructor(){
		this.collection = [];
	}

	newImage (opts) {
		var id = this.collection.length + 1,
			newImage = new Image(id, opts);
		this.collection.push(newImage);
		console.log(this);
	}
}