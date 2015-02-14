import {App} from '../app';
import fabric from 'fabric';

export class Canvas {

	static inject(){ return [App]; }

	constructor(app){
		this.images = app.images;
	}

}