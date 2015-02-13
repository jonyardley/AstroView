import {App} from '../app';

export class Toolbar {

	static inject(){ return [App]; }

	constructor(app){
		this.app = app;
	}

}