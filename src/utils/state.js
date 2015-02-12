import {Images} from './images';


export class State {

	static inject(){ return [Images]; }

	constructor (images) {
		this.mode = 'view';
		this.modes = {
			view: true,
			composite: false,
			analyze: false
		};
		this.images = images;
		this.selectedImage = null;
	}


	/**
	 * Change the current application mode
	 * and update the
	 * @param mode String - One of this.modes
	 */
	changeMode (mode) {
		Object.keys(this.modes).forEach( key => this.modes[key] = (mode === key) );
		this.mode = mode;
	}

}