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
		itemView: ImageListItem,


		initialize: function(){
			/**var file = window.location.search.split('?file=');
			if(file[1]){
				this.fileIsRemote = true;
				this.remoteFile(file[1]);
			}**/
		}

	});

});

