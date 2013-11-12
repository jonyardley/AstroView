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
			canvas: 'canvas',
			canvasWrapper: '.canvasWrapper'
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
			var css;
			if(this.ui.canvasWrapper.height() > this.ui.canvasWrapper.width()){
				css = {width: '100%', height: 'auto'};
			}else{
				css = {height: '100%', width: 'auto'};
			}
			this.ui.canvas.css(css);
			this.ui.canvas.css({
				top: -((this.ui.canvas.height() - this.ui.canvasWrapper.height()) / 2),
				left: -((this.ui.canvas.width() - this.ui.canvasWrapper.width()) / 2)
			});
			
			return false;
		},

		zoom50: function(){
			var css = {
				width: parseInt(this.ui.canvas.attr('width'), 10) / 2,
				height: parseInt(this.ui.canvas.attr('height'), 10) / 2
			};
			css.top = -((css.height - this.ui.canvasWrapper.height()) / 2);
			css.left = -((css.width - this.ui.canvasWrapper.width()) / 2);
			this.ui.canvas.css(css);
			return false;
		},

		zoom100: function(){
			var css = {
				width: this.ui.canvas.attr('width'),
				height: this.ui.canvas.attr('height'),
			};
			css.top = -((css.height - this.ui.canvasWrapper.height()) / 2);
			css.left = -((css.width - this.ui.canvasWrapper.width()) / 2);
			this.ui.canvas.css(css);
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

			this.ui.canvas.css({
				top: -((height - this.ui.canvasWrapper.height()) / 2),
				left: -((width - this.ui.canvasWrapper.width()) / 2)
			});
		},



		initialize: function(){
			_.bindAll(this, 'startDrag', 'stopDrag', 'moveCanvas', 'preview', 'save', 'zoomFit', 'zoom50', 'zoom100');
		}


	});

});