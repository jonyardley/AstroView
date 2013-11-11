define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!./index',
	'mods/preview/preview',
	'fileInput'
], function($, _, Backbone, Marionette, App, tmpl, Preview, fileInput){

	return Backbone.Marionette.CompositeView.extend({

		template: tmpl,
		className: 'panel index',

		events: {
			'change #selectFile': 'fileSelected'
		},

		showPreview: function(fitsModel){
			App.content.show( new Preview({model: fitsModel}) );
		},

		onRender: function(){
			this.$el.find('input[type=file]').prettyFileInput();	
		},

		fileSelected: function(e){
			var files = e.target.files;
			if(files.length){
				var newImage = App.fits.add({
					file: files[0],
					label: 'Image ' + (App.fits.length + 1)
				});

				newImage.on('change:imageData', this.showPreview);
			}
		},

		remoteFile: function(url){
			var newImage = App.fits.add({
					file: '/remoteFits?url=' + url,
					label: 'Image ' + (App.fits.length + 1)
				});

			newImage.on('change:imageData', this.showPreview);
		},



		initialize: function(){
			var file = window.location.search.split('?file=');
			if(file[1]){
				this.remoteFile(file[1]);
			}
		}

	});

});

