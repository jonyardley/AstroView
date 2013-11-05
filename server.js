var connect = require('connect'),
	request = require('request');

var filePrefix = '/remoteFits';

var server = connect()
	.use(function(req, res, next){
		if(req.url.indexOf(filePrefix) === 0){
			console.log(req);
			//proxy.proxyRequest(req, res, fileProxy);
			var fileUrl = req._parsedUrl.query.split('url=');
			if(fileUrl[1]){
				var url = fileUrl[1];
				var x = request(url);
				req.pipe(x);
				x.pipe(res);
			}
		}else{
			next();
		}
	})
	.use(connect.static(__dirname))
	.listen(process.env.VCAP_APP_PORT || 3000);