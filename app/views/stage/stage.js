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
		'change:isSelected': 'toggleImage'
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
		var value = $(e.target).is(":checked");
		this.isComposite = value;

		this.setAllOpacity(value);

		if(value){
			this.context.getContext().globalCompositeOperation = "lighten";
		}else{
			this.context.getContext().globalCompositeOperation = "source-over";
			this.selectedImage.getCtxImage().setOpacity(1);
		}
		this.ui.zoom.trigger('change');
	},


	setAllOpacity: function(isComposite){
		var val = isComposite ? 1 : 0;
		this.collection.each(function(model){
			var image = model.getCtxImage();
			image.setOpacity(val);
		});
	},


	setZoom: function(e){
		var value = this.ui.zoom.val();

		if(value === 'fit'){
			var widthRatio = this.context.width / this.selectedImage.get('meta.width'),
				heightRatio = this.context.height / this.selectedImage.get('meta.height');
			value = (widthRatio > heightRatio) ? heightRatio : widthRatio;
		}

		if(!this.isComposite) {
			this.selectedImage.getCtxImage().scale(value);
			this.selectedImage.set('canvasState.zoom', this.ui.zoom.val());
		}else{
			this.collection.each(function(model){
				model.set('canvasState.zoom', this.ui.zoom.val());
				model.getCtxImage().scale(value);
			}, this);
		}
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
				}
				image.bringToFront();
				this.ui.zoom.val(model.get('canvasState.zoom'));

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
			this.ui.zoom.trigger('change');
			this.context.renderAll();

		}
	},


	onDomRefresh: function(){
		this.initializeCanvas();
	},


	initialize: function(){
		_.bindAll(this, 'renderImage', 'initializeCanvas', 'setZoom', 'toggleImage', 'setComposite',
			'setAllOpacity', 'saveImage');
	}

});
