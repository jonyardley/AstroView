var connect = require('connect'),
	serveStatic = require('serve-static'),
	//request = require('request');
	fs = require('fs');

//var filePrefix = '/remoteFits';


function setupVariables() {
	this.ip = process.env.OPENSHIFT_NODEJS_IP;
	this.port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

	if (typeof this.ip === "undefined") {
		console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
		this.ip = "127.0.0.1";
	};
};

var config = new setupVariables();

var server = connect()
	/**.use(function(req, res, next){
		if(req.url.indexOf(filePrefix) === 0){
			var fileUrl = req._parsedUrl.query.split('url=');

			if(fileUrl[1]){
				req.pause();
				var url = fileUrl[1];
				var x = request(url);
				x.pipe(res, {end:true});
				req.resume();
			}

		}else{
			next();
		}
	})**/
	.use(serveStatic(__dirname + '/app'))
	.listen(config.port, config.ip);

console.log('Application running!');