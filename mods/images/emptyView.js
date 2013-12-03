define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!./empty'
],
function($, _, Backbone, Marionette, App, tmpl){
	
	return Backbone.Marionette.ItemView.extend({
		template: tmpl
	});

});