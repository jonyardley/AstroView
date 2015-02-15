import {LogManager} from 'aurelia-framework';
let log = LogManager.getLogger('av::stage');

import {App} from '../app';
import events from '../utils/events';
import _fabric from 'fabric';

let fabric = _fabric.fabric;


export class Stage {

	static inject() { return [App, Element]; }

	constructor(app, element) {
		this.el = element;
		this.app = app;
		this.images = app.images;
	}

	attached(){
		this.$el = $(this.el).find('#stage');
		this.canvas = this.$el.find('canvas');
		this.canvasId = this.canvas.attr('id');

		console.log(this.canvas);

		this.canvas.attr('width', this.$el.width());
		this.canvas.attr('height', this.$el.height());

		this.context = new fabric.Canvas(this.canvasId);

		events.subscribe('image:rendered', this.renderImage.bind(this));

		events.publish('canvas:ready');

	}

	renderImage(image){
		console.log(this.context);
		this.context.add(image.img.raw);
		this.context.renderAll();
	}


}

