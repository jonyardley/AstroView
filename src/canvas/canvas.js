import {App} from '../app';

export class Canvas {

	static inject(){ return [App]; }

	constructor(app){
		this.images = app.images;
	}

}