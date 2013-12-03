define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'mods/readFile/readFile'
], function($, _, Backbone, Marionette, App, readFile){

	return Backbone.Model.extend({
		
		idAttribute: 'id',

		defaults: {
			file: null,
			label: null,
			imageData: null,
			header: null,
			image: null,
			options: {
				min: 0,
				max: 500,
				scaleType: 'linear'
			}
		},
		

		readFile: function(){
			readFile(this);
		},


		loaderHide: function(){
			App.vent.trigger('loaderHide');
		},

		loaderShow: function(){
			App.vent.trigger('loaderShow');
		},

		initialize: function(){
			this.on('add', this.readFile);
			this.on('add', this.loaderShow);
			this.on('change:imageData', this.loaderHide);
		}

	});

});

