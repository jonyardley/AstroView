define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!../templates/images',
	'mods/selectImage/view',
	'fileInput',
	'./images'
], function($, _, Backbone, Marionette, App, ImagesTmpl, SelectImage, fileInput, ImagesView){

	return Backbone.Marionette.Layout.extend({

		template: ImagesTmpl,
		id: 'images',

		regions: {
			images: '.imageList',
			selectImage: '.selectImage'
		},

		onShow: function(){
			this.images.show(new ImagesView({collection: App.fits}));
			this.selectImage.show(new SelectImage({title: 'Add an image'}));
		},

		initialize: function(){
			/**var file = window.location.search.split('?file=');
			 if(file[1]){
				this.fileIsRemote = true;
				this.remoteFile(file[1]);
			}**/
		}

	});

});

