var Backbone = require('backbone'),
	_ = require('underscore'),
	FitsModel = require('./FitsModel');

module.exports = Backbone.Collection.extend({

	model: FitsModel,

	selectFirst: function(fits){
		if(this.indexOf(fits) >= 0){
			fits.select();
		}
	},

	initialize: function(){
		_.bindAll(this, 'selectFirst');
		this.on('add remove', this.selectFirst);
	}

});