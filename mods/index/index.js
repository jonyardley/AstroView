define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!./index',
	'mods/preview/preview'
], function($, _, Backbone, Marionette, App, tmpl, Preview){

	return Backbone.Marionette.CompositeView.extend({

		template: tmpl,
		className: 'panel index',

		events: {
			'change #selectFile': 'fileSelected'
		},

		showPreview: function(fitsModel){
			App.content.show( new Preview({model: fitsModel}) );
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
		}

	});

});

