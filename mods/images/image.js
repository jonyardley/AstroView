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
			'change:imageData': 'render',
		},

		ui: {
			canvas: 'canvas',
			label: '.label'
		},

		events: {
			'click .editLabel': 'editLabel',
			'keypress .label': 'disableReturn',
			'click .remove': 'deleteImage'
		},

		deleteImage: function(e){
			this.model.collection.remove(this.model);
			return false;
		},

		disableReturn: function(e){
			if(e.which === 13){
				this.labelEdited();
			}
			return e.which !== 13;
		},

		labelEdited: function(e){
			if(this.ui.label.text().length > 2){
				this.ui.label.attr('contentEditable', false);
				this.ui.label.off('blur', this.labelEdited);
				this.model.set('label', this.ui.label.text());
			}else{
				this.ui.label.focus();
				window.alert('Please enter a name!');
			}	
		},

		editLabel: function(e){
			this.ui.label.attr('contentEditable', true);
			this.ui.label.focus();
			this.ui.label.on('blur', this.labelEdited);
			return false;
		},

		onRender: function(){
			if(this.model.get('imageData')){

				var fits = this.model.toJSON(),
					scale = this.ui.canvas.attr('width') / fits.image.width;
				
				var thumb = renderImage({
					fits: fits,
					scale: scale,
					width: Math.floor(fits.image.width * scale),
					height: Math.floor(fits.image.height * scale)
				});

				var context = this.ui.canvas[0].getContext('2d');
				context.drawImage(thumb, 0, 0);

			}
		},

		initialize: function(){
			_.bindAll(this, 'editLabel', 'labelEdited', 'disableReturn', 'deleteImage');
		}

	});


});