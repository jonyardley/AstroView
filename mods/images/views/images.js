define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!../templates/images',
	'./image',
	'fileInput',
	'./emptyView'
], function($, _, Backbone, Marionette, App, ImagesTmpl, ImageListItem, fileInput, emptyView){

	return Backbone.Marionette.CompositeView.extend({

		template: ImagesTmpl,
		className: 'panel images',
		itemViewContainer: 'ul.imageList',
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

