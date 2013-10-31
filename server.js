var connect = require('connect');

var server = connect()
	.use(connect.static(__dirname))
	.listen(process.env.VCAP_APP_PORT || 3000);