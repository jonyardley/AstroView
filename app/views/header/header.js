var Backbone = require('backbone'),
	Marionette = require('marionette'),
	Rivets = require('rivets'),
	App = require('app'),
	template = require('./header.html');

var viewModel = new Backbone.Model({
	name: App.name,
	version: App.version
});

module.exports = Marionette.ItemView.extend({

	template: template,

	onRender: function(){
		Rivets.bind(this.$el, {model: this.model});
	},

	initialize: function(){
		this.model = viewModel;
	}

});