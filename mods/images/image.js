define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!./image',
	'mods/renderImage/renderImage'
], function($, _, Backbone, Marionette, App, ImageTmpl, renderImage){

	return Backbone.Marionette.ItemView.extend({
		template: ImageTmpl,
		tagName: 'li',
		className: 'imageRow',

		modelEvents: {
			'change:imageData': 'render'
		},

		ui: {
			canvas: 'canvas'
		},

		events: {
			'click': 'goToImage'
		},

		goToImage: function(e){
			if(!$(e.target).is('a')){
				App.Router.navigate('#/image/'+this.model.id, {replace: true, trigger: true});
			}
		},

		onRender: function(){
			if(this.model.get('imageData')){

				var fitsImage = this.model.get('image'),
					imageScale = this.ui.canvas.attr('width') / fitsImage.width,
					width = Math.floor(fitsImage.width * imageScale),
					height = Math.floor(fitsImage.height * imageScale),
					context = this.ui.canvas[0].getContext('2d');
					
				var imageBuffer = context.createImageData(
					width,
					height
				);

				renderImage(context, imageBuffer, imageScale, width, height, this.model.toJSON());
			}
		},

		initialize: function(){
			_.bindAll(this, 'goToImage');
		}

	});


});