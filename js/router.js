define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'./controller'
], function($, _, Backbone, Marionette, App, controller){

	App.Router = new Backbone.Marionette.AppRouter({
		controller: controller,
		appRoutes: {
			'': 'index',
			'view': 'view',
			'analyse': 'analyse',
			'combine': 'combine'
		}
	}

});