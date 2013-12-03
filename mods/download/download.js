define([
	'jquery',
	'underscore',
	'Backbone',
	'Marionette',
	'app'
],
function($, _, Backbone, Marionette, App){
	
	return function ( data, filename ) {
		$( '<a>' ).attr( {
			href: data,
			download: filename
		} )[0].click();
	};

});