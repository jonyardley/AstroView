define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'./controller'
], function($, _, Backbone, Marionette, controller){

	
	var Router = Backbone.Marionette.AppRouter.extend({

		appRoutes: {
			'':							'images',
			'image/:fitsId':			'image',
			'image/:fitsId/scale':		'scale',
			'image/:fitsId/header':		'header',

			'colourImaging':			'colourImaging',

			'*whatever':				'other'
		}

	});

	var router = new Router({
		controller: controller
	});

	return router;


});