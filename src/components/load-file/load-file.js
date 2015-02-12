import {State} from '../../utils/state';

export class LoadFile {

	static inject() { return [Element, State]; }

	constructor(element, state) {
		this.state = state;
		this.el = element;
	}

	fileSelected(){

		var $input = $(this.el).find('input'),
			file = $input[0].files[0];

		this.state.images.newImage({file});
	}

}