var App = require('app'),
	_ = require('underscore'),
	Backbone = require('backbone'),
	LoadFits = require('../utils/loadFits'),
	renderImage = require('../utils/renderImage'),
	fabric = require('fabric').fabric;

module.exports = Backbone.NestedModel.extend({

	defaults: function() {
		var model = this;

		return{
			file: '',
			label: '',
			imageData: null,
			header: null,
			meta: null,
			options: {
				min: 0,
				max: 500,
				minRaw: 0,
				maxRaw: 19369, //this is a little hack to init the non-linear slider in the right place on init.
				scaleType: 'linear',
				color: '#FFFFFF'
			},
			canvasState: {
				zoom: 'fit',
				left: 0,
				top: 0
			},
			img: null,
			_dirty: true,
			loading: {
				state: null,
				progress: 0
			},
			isEditing: false,
			isSelected: false,
			ctxImage: null
		};
	},

	updateState: function(e){
		this.set('canvasState.top', this.getCtxImage().getTop());
		this.set('canvasState.left', this.getCtxImage().getLeft());
	},

	setCtxImage: function(){
		var currentImage = this.ctxImage;

		if(currentImage){
			currentImage.remove();
		}

		var image = new fabric.Image(this.get('img'), {
			left: this.get('canvasState.left'),
			top: this.get('canvasState.top'),
			selectable: true,
			hasControls: false
		});

		image.on('mouseup', this.updateState);

		this.ctxImage = image;
	},

	getCtxImage: function(){
		return this.ctxImage;
	},

	edit: function(e){
		if(this.get('isEditing')){
			App.vent.trigger('edit:close', this);
			this.set('isEditing', false);
		} else {
			App.vent.trigger('edit:open', this);
			this.set('isEditing', true);
		}
	},

	select: function(){
		var isSelected = !this.get('isSelected');

		this.set('isSelected', isSelected);

		this.collection.each(function(fits){
			if(fits !== this){
				fits.set('isSelected', false);
			}
		}.bind(this));

		if(isSelected){
			App.vent.trigger('stage:render', this);
		}
	},

	reRenderImage: function(){
		if(this.get('_dirty')){
			var model = this;
			renderImage({fits: model.toJSON()}, function(img){
				model.attributes.img = img;
				model.setCtxImage();
				model.set('_dirty', false);
			});
		}
	},

	initialize: function(){

		_.bindAll(this, 'edit', 'reRenderImage', 'select', 'updateState');

		var model = this;

		var label = 'Image ' + (this.collection.length + 1);
		model.set('label', label);

		LoadFits(model, function(model){

			renderImage({fits: model.toJSON()}, function(img){
				model.attributes.img = img;
				model.setCtxImage();
				model.set('_dirty', false);
			});

		});

		this.on('change:_dirty', this.reRenderImage);

	}

});