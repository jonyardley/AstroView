define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!./index',
	'mods/selectImage/view'
], function($, _, Backbone, Marionette, App, Tmpl, SelectImage){

	return Backbone.Marionette.Layout.extend({

		template: Tmpl,
		id: 'index',

		regions: {
			selectImage: '.selectImage'
		},

		onShow: function(){
			this.selectImage.show(new SelectImage());
			App.fits.on('add', this.goToImages);
		},

		onHide: function(){
			App.fits.off('add', this.goToImages);
		},

		goToImages: function(){
			App.Router.navigate('#/images', {trigger: true});
		}

	});

});