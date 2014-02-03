define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!./template',
	'fileInput'
], function($, _, Backbone, Marionette, App, Tmpl, fileInput){

	return Backbone.Marionette.ItemView.extend({
		
		template: Tmpl,

		onRender: function(){
			this.$el.find('input[type=file]').prettyFileInput();
		}


	});

});