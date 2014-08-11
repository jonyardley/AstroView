var Backbone = require('backbone');
var Rivets = require('rivets');

Rivets.adapters[':'] = {
	// set the listeners to update the corresponding DOM element
	subscribe: function (obj, keypath, callback) {
		if (obj instanceof Backbone.Collection) {
			obj.on('add remove reset', callback);
		}
		keypath = keypath.replace('>', '.');
		obj.on('change:' + keypath, callback);
	},
	// this will be triggered to unbind the Rivets.js events
	unsubscribe: function (obj, keypath, callback) {
		if (obj instanceof Backbone.Collection) {
			obj.off('add remove reset', callback);
		}
		keypath = keypath.replace('>', '.');
		obj.off('change:' + keypath, callback);
	},
	// define how Rivets.js should read the propery from our objects
	read: function (obj, keypath) {
		// if we use a collection we will loop through its models otherwise we just get the model properties
		keypath = keypath.replace('>', '.');
		return obj instanceof Backbone.Collection ? obj.models : obj.get(keypath);
	},
	// It gets triggered whenever we want update a model using Rivets.js
	publish: function (obj, keypath, value) {
		keypath = keypath.replace('>', '.');
		obj.set(keypath, value);
	}
};
