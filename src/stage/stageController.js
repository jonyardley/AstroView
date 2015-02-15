import _fabric from 'fabric';
import {LogManager} from 'aurelia-framework';
import events from '../utils/events';
import app from '../app';

let log = LogManager.getLogger('av::stageController');
let fabric = _fabric.fabric;


export class StageController {

	constructor(canvas, app){
		this.app = app;
		this.id = canvas.attr('id');


	}

	renderImage(image){
		console.log(this.context);
		this.context.add(image.img.raw);
		this.context.renderAll();
	}

}