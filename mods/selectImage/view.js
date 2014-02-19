define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app',
	'hbars!./template',
	'fileInput'
], function($, _, Backbone, Marionette, App, Tmpl, fileInput){

	return Backbone.Marionette.ItemView.extend({
		
		template: Tmpl,

		events: {
			'change @ui.selectFile': 'fileSelected',
			'click @ui.addImageBtn': 'addExternal'
		},

		ui: {
			selectFile: '#selectFile',
			externalUrl: '#externalUrl',
			addImageBtn: '#addImage'
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
		
		fileSelected: function(e){
			var files = e.target.files;
			if(files.length){
				var newImage = App.fits.add({
					file: files[0]
				});
				if(this.ui.selectFile.val){
					this.ui.selectFile.val('');
				}
			}
		},

		remoteFile: function(url){
			var newImage = App.fits.add({
				file: '/remoteFits?url=' + url
			});
		},

		onRender: function(){
			this.$el.find('input[type=file]').prettyFileInput();
		},

		serializeData: function(){
			return {
				title: this.options.title || 'Get started'
			}
		},

		initialize: function(){
			_.bindAll(this, 'addExternal', 'fileSelected', 'remoteFile');
		}


	});

});