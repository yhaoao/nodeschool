var http = require('http');
var url = require('url');
var querystring = require('querystring');
var port = parseInt(process.argv[2], 10);

var server = http.createServer(function(req, res) {
	var reqUrl = url.parse(req.url);

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	var date = new Date(querystring.parse(reqUrl.query).iso);

	if (reqUrl.pathname === '/api/parsetime') {
		res.end(JSON.stringify({
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		}));
	} else if (reqUrl.pathname === '/api/unixtime') {
		res.end(JSON.stringify({
			"unixtime": date.valueOf()
		}));
	}
})
server.listen(port);