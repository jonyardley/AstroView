define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!./images',
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

		events: {
			'change #selectFile': 'fileSelected',
			'click .imageExternalUrl button': 'addExternal'
		},

		ui: {
			selectFile: '#selectFile',
			externalUrl: '#externalUrl'
		},

		addExternal: function(e){
			var val = this.ui.externalUrl.val();
			if(val.length > 3){
				this.remoteFile(val);
				this.ui.externalUrl.val('');
			}else{
				window.alert('Enter a url first.');
			}
		},

		onRender: function(){
			if(!this.fileIsRemote){
				App.vent.trigger('loaderHide');
			}
			this.$el.find('input[type=file]').prettyFileInput();
		},

		fileSelected: function(e){
			var files = e.target.files;
			if(files.length){
				var newImage = App.fits.add({
					file: files[0],
					label: 'Image ' + (App.fits.length + 1),
					id: App.fits.length + 1
				});
			}
			this.ui.selectFile.val('');
		},

		remoteFile: function(url){
			var newImage = App.fits.add({
					file: '/remoteFits?url=' + url,
					label: 'Image ' + (App.fits.length + 1),
					id: App.fits.length + 1
				});
		},



		initialize: function(){
			_.bindAll(this, 'addExternal');
			var file = window.location.search.split('?file=');
			if(file[1]){
				this.fileIsRemote = true;
				this.remoteFile(file[1]);
			}
		}

	});

});

