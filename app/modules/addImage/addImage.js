var App = require('app'),
	_ = require('underscore'),
	Marionette = require('marionette');

module.exports = Marionette.ItemView.extend({

	template: require('./addImage.html'),
	className: 'addImage',

	ui: {
		input: '.add-file'
	},

	events: {
		"change @ui.input": "addFile"
	},

	addFile: function(e){
		var file = e.target.files[0];
		if(file) {
			App.FITS.add({
				file: file
			});
			this.ui.input.val('');
		}
	},

	initialize: function(){
		_.bindAll(this, 'addFile');
	}


})