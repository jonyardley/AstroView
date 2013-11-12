define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!./tmpl',
	'mods/renderImage/renderImage',
	'mods/preview/preview'
], function($, _, Backbone, Marionette, App, tmpl, renderImage, Preview){

	return Backbone.Marionette.ItemView.extend({

		template: tmpl,
		className: 'panel fullImage',

		ui: {
			canvas: 'canvas'
		},

		events: {
			'mousedown canvas': 'startDrag',
			'mouseup canvas': 'stopDrag',
			'click #zoomFit': 'zoomFit',
			'click #zoom50': 'zoom50',
			'click #zoom100': 'zoom100',
			'click #preview': 'preview',
			'click #save': 'save'
		},

		preview: function(){
			App.content.show( new Preview({model: this.model}) );
			return false;
		},


		save: function(){
			var imageUrl = this.ui.canvas[0].toDataURL();
			var imageWindow = window.open();
			imageWindow.document.write('<img src="'+imageUrl+'"/>');
			return false;
		},


		zoomFit: function(){
			if(this.$el.height > this.$el.width){
				this.ui.canvas.css({width: '100%', height: 'auto'});
			}else{
				this.ui.canvas.css({height: '100%', width: 'auto'});
			}
			return false;
		},

		zoom50: function(){
			this.ui.canvas.css({
				width: parseInt(this.ui.canvas.attr('width'), 10) / 2,
				height: parseInt(this.ui.canvas.attr('height'), 10) / 2
			});
			return false;
		},

		zoom100: function(){
			this.ui.canvas.css({
				width: this.ui.canvas.attr('width'),
				height: this.ui.canvas.attr('height')
			});
			return false;
		},

		isDragging: false,

		startDrag: function(e){
			this.ui.canvas.on('mousemove', this.moveCanvas);

			var top = parseInt(this.ui.canvas.css('top'), 10) || 0;
			var left = parseInt(this.ui.canvas.css('left'), 10) || 0;

			this.x = e.clientX - left;
			this.y = e.clientY - top;
		},

		stopDrag: function(e){
			this.isDragging = false;
			this.ui.canvas.off('mousemove', this.moveCanvas);
		},

		moveCanvas: function(e){
			this.isDragging = true;
			var top = parseInt(this.ui.canvas.css('top'), 10) || 0;
			var left = parseInt(this.ui.canvas.css('left'), 10) || 0;

			this.ui.canvas.css({
				top: -(this.y - e.clientY),
				left: -(this.x - e.clientX)
			});

		},


		onRender: function(){

			this.context = this.ui.canvas[0].getContext('2d');

			var width = this.model.get('image').width,
				height = this.model.get('image').height;

			this.ui.canvas.attr('width', width);
			this.ui.canvas.attr('height', height);

			this.imageBuffer = this.context.createImageData( width, height );

			renderImage(this.context, this.imageBuffer, 1, width, height, this.model.toJSON());
		},


		initialize: function(){
			_.bindAll(this, 'startDrag', 'stopDrag', 'moveCanvas', 'preview', 'save');
		}


	});

});