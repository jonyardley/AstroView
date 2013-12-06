define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!./imageTmpl'
],
function($, _, Backbone, Marionette, App, imageTmpl){
	
	return Backbone.Marionette.ItemView.extend({

		template: imageTmpl,
		tagName: 'li'

	});

});