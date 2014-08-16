var Marionette = require('marionette'),
	_ = require('underscore'),
	Rivets = require('rivets'),
	renderImage = require('../../utils/renderImage');

module.exports = Marionette.ItemView.extend({

	template: require('./thumb.html'),
	tagName: 'li',
	className: 'thumb',

	ui: {
		canvas: 'canvas'
	},

	events: {
		'click': 'select'
	},

	modelEvents: {
		'change:_dirty': 'updateCanvas'
	},

	onRender: function(){
		Rivets.bind(this.$el, {
			image: this.model
		});
	},

	select: function(){
		if(this.model.get('isSelected')){
			this.model.edit();
		}else{
			this.model.select();
		}
	},

	updateCanvas: function(){
		var context = this.ui.canvas[0].getContext('2d');
		var callback = function (img) {
			_.defer(function () {
				context.drawImage(img, 0, 0);
			});
		};

		renderImage({
			fits: this.model.toJSON(),
			width: 46,
			height: 46
		}, callback);
	},

	initialize: function(){
		_.bindAll(this, 'select', 'updateCanvas');
	}
})