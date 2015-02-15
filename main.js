var jQuery = require('jquery');
window.jQuery = jQuery;
require('bootstrap');

var riot = require('riot');

//Import utils
var App = require('./core/app');
riot.app = new App(riot);

//import components
require('./views/av-main.tag');
require('./views/header/av-header.tag');
require('./views/sidebar/sidebar.tag');
require('./modules/no-image/no-image.tag');
require('./modules/load-image/load-image.tag');
require('./modules/thumb/av-thumb.tag');

riot.mount('*');
