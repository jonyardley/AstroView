define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'./controller'
], function($, _, Backbone, Marionette, controller){

	
	var Router = Backbone.Marionette.AppRouter.extend({

		appRoutes: {
			'':								'index',
			'images':						'images',
			'images/:fitsId':				'image',
			'images/:fitsId/scale':			'scale',
			'images/:fitsId/header':		'header',

			'*whatever':					'other'
		}

	});

	var router = new Router({
		controller: controller
	});

	return router;


});