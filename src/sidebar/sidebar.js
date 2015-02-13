import {App} from '../app';

export class Sidebar {

	static inject(){ return [App]; }

	constructor(app){
		this.images = app.images;
	}

}