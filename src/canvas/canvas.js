import {State} from '../utils/state';

export class Canvas {

	static inject(){ return [State]; }

	constructor(state){
		this.state = state;
	}

}