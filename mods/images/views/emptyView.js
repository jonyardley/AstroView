define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!../templates/empty'
],
function($, _, Backbone, Marionette, App, tmpl){
	
	return Backbone.Marionette.ItemView.extend({
		template: tmpl
	});

});