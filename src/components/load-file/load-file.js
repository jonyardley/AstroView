export class LoadFile {

	static inject() { return [Element]; }

	constructor(element) {
		this.el = element;
	}

	fileSelected(){
		var $input = $(this.el).find('input'),
			file = $input[0].files[0];
		console.log(file);
	}

}