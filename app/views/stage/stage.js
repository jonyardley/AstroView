var Marionette = require('marionette'),
	_ = require('underscore'),
	Rivets = require('rivets'),
	fabric = require('fabric').fabric;

module.exports = Marionette.ItemView.extend({

	template: require('./stage.html'),
	className: 'stageInner',

	ui: {
		canvas: '.canvasWrapper canvas',
		zoom: '.zoom',
		composite: '.composite'
	},

	events: {
		'change @ui.zoom': 'setZoom',
		'change @ui.composite': 'setComposite'
	},

	collectionEvents: {
		'change:_dirty': 'renderImage',
		'change:isSelected': 'toggleImage',
		'change:options.color': 'changeColor'
	},

	imageGroup: null,
	selectedImage: null,
	isComposite: false,

	setComposite: function(e){
		var value = $(e.target).val();
		this.isComposite = value;
		this.setAllOpacity(value);
		if(value){
			this.context.getContext().globalCompositeOperation = "lighten";
		}
	},

	setAllOpacity: function(isComposite){
		var val = isComposite ? 1 : 0;
		this.collection.each(function(model){
			var image = model.getCtxImage();
			image.setOpacity(val);
		});
	},


	changeColor: function(model){
		var color = model.get('options.color');
		var filter = new fabric.Image.filters.Multiply({
			color: color
		});
		var image = model.getCtxImage();
		image.filters = [filter];
		image.applyFilters(this.context.renderAll.bind(this.context));
	},


	setZoom: function(e){
		var value = this.ui.zoom.val();
		this.selectedImage.getCtxImage().scale(value);
		this.context.renderAll();
	},

	initializeCanvas: function(){
		this.ui.canvas.attr('width', this.$el.width());
		this.ui.canvas.attr('height', this.$el.height());
		this.context = new fabric.Canvas('stageCanvas');
	},

	toggleImage: function(model){
		var image = model.getCtxImage();
		if(model.get('isSelected')){ this.selectedImage = model; }
		if(image){
			if(model.get('isSelected')){
				if(!this.isComposite){
					image.setOpacity(1);
					this.ui.zoom.val(image.getScaleX());
				}
				image.bringToFront();

			}else{
				if(!this.isComposite) {
					image.setOpacity(0);
				}
			}
			this.context.renderAll();
		}
	},


	renderImage: function(model){
		if(!model.get('_dirty')){
			var image = model.getCtxImage();
			this.context.add(image);
			this.ui.zoom.val(image.getScaleX());
			this.changeColor(model);
			this.context.renderAll();
		}
	},

	onDomRefresh: function(){
		this.initializeCanvas();
	},


	initialize: function(){
		_.bindAll(this, 'renderImage', 'initializeCanvas', 'setZoom', 'toggleImage', 'setComposite', 'setAllOpacity');
	}

});
