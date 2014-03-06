define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'./image',
	'fileInput',
	'./emptyView'
], function($, _, Backbone, Marionette, App, ImageListItem, fileInput, emptyView){

	return Backbone.Marionette.CollectionView.extend({

		tagName: 'ul',
		className: 'images',
		emptyView: emptyView,
		itemView: ImageListItem

	});

});

