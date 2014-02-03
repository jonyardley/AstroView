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
		className: 'fitsHeader panel',

		events: {
			'click #back': 'fullImage'
		},

		fullImage: function(){
			App.Router.navigate('#/images/'+this.model.get('id'), {trigger: true, replace: true});
		},

		initialize: function(){
			_.bindAll(this, 'fullImage');
		}

	});

});

