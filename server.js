var connect = require('connect'),
	request = require('request');

var filePrefix = '/remoteFits';

var server = connect()
	.use(function(req, res, next){
		if(req.url.indexOf(filePrefix) === 0){
			var fileUrl = req._parsedUrl.query.split('url=');
			
			if(fileUrl[1]){
				req.pause();
				var url = fileUrl[1];
				var x = request(url);
				//req.pipe(x);
				x.pipe(res, {end:true});
				//console.log(x, req);
				req.resume();
			}

		}else{
			next();
		}
	})
	.use(connect.static(__dirname))
	.listen(process.env.VCAP_APP_PORT || 3000);