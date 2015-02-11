import {Images} from './images';


export class State {

	static inject(){ return [Images]; }

	constructor (images) {
		this.mode = 'analyze';
		this.imageId = null;
		this.images = images;
	}

	changeMode (mode) {
		this.mode = mode;
	}

}