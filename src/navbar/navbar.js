import {State} from '../utils/state';

export class Navbar {

	static inject(){ return [State]; }

	constructor(state){
		this.state = state
		console.log('navbar loaded!');
	}

}