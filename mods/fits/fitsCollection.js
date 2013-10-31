define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'./fitsModel'
], function($, _, Backbone, Marionette, App, FitsModel){

	return Backbone.Collection.extend({
		model: FitsModel,
		
		initialize: function(){
		}
	});

});

