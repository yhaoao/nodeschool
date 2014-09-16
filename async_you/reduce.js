var http = require('http');
var async = require('async');
var url = require('url');
var querystring=require('querystring');

var requestUrl = url.parse(process.argv[2]);

async.reduce(['one', 'two', 'three'], 0, function(memo, item, callback) {
	

	var body = '';

	var options = {
		hostname: requestUrl.hostname,
		port: requestUrl.port,
		path: requestUrl.path+'?'+querystring.stringify({ number:item }),
	};

	http.get(options, function(res) {
		res.on('data', function(chunck) {
			body += chunck.toString();
		});

		res.on('end', function() {
			callback(null, memo+parseInt(body,10));
		})
	})

}, function(err, result) {
	console.log(result);
});