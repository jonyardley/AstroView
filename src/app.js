import {LogManager} from 'aurelia-framework';
let log = LogManager.getLogger('av::state');

import {Images} from './utils/images';

export class App {

	static inject(){ return [Images]; }

	constructor (images) {
		this.mode = 'view';
		this.modes = {
			view: true,
			composite: false,
			analyze: false
		};
		this.images = images;
	}


	/**
	 * Change the current application mode
	 * and update the
	 * @param mode String - One of this.modes
	 */
	changeMode (mode) {
		Object.keys(this.modes).forEach( key => this.modes[key] = (mode === key) );
		this.mode = mode;
		log.info('state changed:', this.mode);
	}

}