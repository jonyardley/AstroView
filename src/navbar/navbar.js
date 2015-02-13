import {App} from '../app';

export class Navbar {

	static inject(){ return [App]; }

	constructor(app){
		this.app = app;
	}

}