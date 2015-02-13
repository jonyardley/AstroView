import {App} from '../../app';

export class LoadFile {

	static inject() { return [Element, App]; }

	constructor(element, app) {
		this.images = app.images;
		this.el = element;
	}

	fileSelected(){

		var $input = $(this.el).find('input'),
			file = $input[0].files[0];

		this.images.newImage({file});
	}

}