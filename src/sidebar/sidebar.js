
export class Sidebar {

	constructor() {
	}

	activate(state){
		this.state = state;
	}

	show(){
		return this.state = 'composite'
	}

}