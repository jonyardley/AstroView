import {LogManager} from 'aurelia-framework';
let log = LogManager.getLogger('av::state');

import {Images} from './utils/images';
import events from './utils/events';

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
		events.subscribe('canvas:ready', this.canvasReady.bind(this));
	}


	/**
	 * Change the current application mode
	 * and update the
	 * @param mode String - One of this.modes
	 */
	changeMode (mode) {
		Object.keys(this.modes).forEach( key => this.modes[key] = (mode === key) );
		this.mode = mode;
		events.publish('mode:change', this.mode);
		log.info('state changed:', this.mode);
	}

	canvasReady(){
		this.images.newImage({file: '/assets/fits/656nmos.fits'});
	}

}