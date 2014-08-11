var App = require('app'),
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
		}
	}


})