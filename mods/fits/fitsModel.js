define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'mods/readFile/readFile'
], function($, _, Backbone, Marionette, App, readFile){

	return Backbone.Model.extend({
		
		defaults: {
			file: null,
			label: null,
			imageData: null,
			header: null,
			image: null,
			options: null
		},
		

		readFile: function(){
			readFile(this);
		},


		initialize: function(){
			this.on('add', this.readFile);
		}

	});

});

