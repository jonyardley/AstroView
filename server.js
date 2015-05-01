var express = require('express'),
    app = express();

var host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.use(express.static(__dirname + '/dist'));

app.listen(port, host, function(){
  console.log('AstroView Started...');
});
