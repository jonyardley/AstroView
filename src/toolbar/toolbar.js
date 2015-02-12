import {State} from '../utils/state';

export class Toolbar {

	static inject(){ return [State]; }

	constructor(state){
		this.state = state;
		console.log('toolbar loaded!');
	}

}