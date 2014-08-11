var Marionette = require('marionette'),
	_ = require('underscore'),
	Rivets = require('rivets'),
	fabric = require('fabric').fabric;

module.exports = Marionette.ItemView.extend({

	template: require('./stage.html'),
	className: 'stageInner',

	ui: {
		canvas: '.canvasWrapper canvas'
	},

	initializeCanvas: function(){
		this.ui.canvas.attr('width', this.$el.width());
		this.ui.canvas.attr('height', this.$el.height());
		this.context = new fabric.Canvas('stageCanvas');
		if(!this.model.get('_dirty')){
			this.showImage();
		}
	},

	showImage: function(){
		if(!this.model.get('_dirty') && this.context) {
			this.image = new fabric.Image(this.model.get('img'), {
				left: this.ui.canvas.width() / 2,
				top: this.ui.canvas.height() / 2,
				scaleY: this.ui.canvas.height() / this.model.get('meta.height'),
				scaleX: this.ui.canvas.height() / this.model.get('meta.height'),
				selectable: true
				//hasControls: false

			});
			this.context.add(this.image);
		}
	},

	onDomRefresh: function(){
		if(this.model && !this.context) {
			this.initializeCanvas();
		}
	},

	onRender: function() {

		Rivets.bind(this.$el, {
			fits: this.model
		});

	},

	initialize: function(){
		_.bindAll(this, 'showImage', 'initializeCanvas');

		if(this.model) {
			this.model.on('change:_dirty', this.showImage);
		}
	}

});
