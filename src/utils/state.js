import {Images} from './images';


export class State {

	static inject(){ return [Images]; }

	constructor (images) {
		this.mode = 'view';
		this.modes = {
			view: true,
			composite: false
		};
		this.selectedImage = null;
		this.images = images;
	}

	changeMode (mode) {

		Object.keys(this.modes).forEach( key =>
			this.modes[key] = (mode === key)
		);

		this.mode = mode;
	}

}