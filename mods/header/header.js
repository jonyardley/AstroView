define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!./header'
], function($, _, Backbone, Marionette, App, tmpl){

	return Backbone.Marionette.ItemView.extend({

		template: tmpl,

		events: {
			'change .fileInput input': 'fileSelected'
		},

		fileSelected: function(e){
			App.selectedFile = e.target.files[0];
			App.vent.trigger('file:selected');
		}

	});

});

