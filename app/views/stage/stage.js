var Marionette = require('marionette'),
	_ = require('underscore'),
	$ = require('jquery'),
	Rivets = require('rivets'),
	fabric = require('fabric').fabric;

module.exports = Marionette.ItemView.extend({

	template: require('./stage.html'),
	className: 'stageInner',

	ui: {
		canvas: '.canvasWrapper canvas',
		zoom: '.zoom',
		composite: '.composite',
		save: '.save'
	},

	events: {
		'change @ui.zoom': 'setZoom',
		'change @ui.composite': 'setComposite',
		'click @ui.save': 'saveImage'
	},

	collectionEvents: {
		'change:_dirty': 'renderImage',
		'change:isSelected': 'toggleImage',
		'change:options.color': 'changeColor'
	},

	imageGroup: null,
	selectedImage: null,
	isComposite: false,

	saveImage: function(){
		function download(url,name){
			$('<a>').attr({href:url,download:name})[0].click();
		}
		var name = !this.isComposite ? this.selectedImage.get('label') : 'Composite Image';
		download(this.ui.canvas[0].toDataURL(),name+'.png');
	},

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
		_.bindAll(this, 'renderImage', 'initializeCanvas', 'setZoom', 'toggleImage', 'setComposite', 'setAllOpacity', 'saveImage');
	}

});
