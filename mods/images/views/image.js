define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!../templates/image',
	'mods/utils/renderImage'
], function($, _, Backbone, Marionette, App, ImageTmpl, renderImage){

	return Backbone.Marionette.ItemView.extend({
		template: ImageTmpl,
		tagName: 'li',
		className: 'imageRow',

		modelEvents: {
			'change:_dirty': 'render'
		},

		ui: {
			image: '.image',
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

			this.ui.image.addClass('loading');

			if(!this.model.get('_dirty') && this.model.get('thumbImg')){

				var ui = this.ui;
				var model = this.model;

				_.defer(function(){

					var context = ui.canvas[0].getContext('2d');
					var image = model.get('thumbImg');

					_.defer(function(){ context.drawImage(image, 0, 0); });

					ui.image.removeClass('loading');

				});

			}
		},

		initialize: function(){
			_.bindAll(this, 'onRender','editLabel', 'labelEdited', 'disableReturn', 'deleteImage');
		}

	});


});