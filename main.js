var jQuery = require('jquery');
window.jQuery = jQuery;
require('bootstrap');

var Vue = require('vue'),
	appOptions = require('./core/app.vue'),
	app = new Vue(appOptions).$mount('#app');

console.log('--> App Initialized!');

/** DEV **/
app.addImage({file: 'assets/fits/656nmos.fits'});