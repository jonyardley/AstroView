var jQuery = require('jquery');
window.jQuery = jQuery;
require('bootstrap');

var Vue = require('vue'),
	appOptions = require('./components/app.vue'),
	app = new Vue(appOptions).$mount('#app');

app.$on('ready', function(){
	console.log('APP IS READY!');
});