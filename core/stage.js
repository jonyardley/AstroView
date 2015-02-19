var $ = require('jquery'),
	_fabric = require('fabric'),
	fabric = _fabric.fabric;

function Stage(app){

	this.images = app.images;
	this.canvas = '#stageCanvas';
	this.stage = '#stage';
	this.$canvas = null;
	this.$stage = null;
	this.context = null;

	this.images.on('image:rendered', this.updateCanvas.bind(this));

}

Stage.prototype.initializeCanvas = function(){
	this.$canvas = $(this.canvas);
	this.$stage = $(this.stage);

	$('#main').addClass('init');

	this.$canvas.attr('width', this.$stage.width());
	this.$canvas.attr('height', this.$stage.height());

	this.context = new fabric.Canvas(this.canvas.replace('#', ''));
};

Stage.prototype.renderImage = function(image){
	var img = new fabric.Image(image.img.raw);
	this.context.add(img);
};


Stage.prototype.updateCanvas = function(image){
	if(!this.context){
		this.initializeCanvas();
	}

	this.renderImage(image);
};

module.exports = Stage;


