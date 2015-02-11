import {State} from './utils/state';

/**
 * Main App Class
 */
export class App {

	static inject(){ return [State]; }

	constructor (state) {
		this.state = state;
	}

}