// Vendors
var Backbone = require('backbone');
require('backbone-nested');
Backbone.$ = require('jquery');
require('rivets');
require('../utils/rivets-adapter');


var Marionette = require('marionette'),
	pjson = require('../../package.json');


// App bootstrap
var App = new Marionette.Application();

App.name = pjson.name;
App.version = pjson.version;


//Add core initializer
App.addInitializer(function(){
	Backbone.history.start();
});

window.app = App;

//export App
module.exports = App;