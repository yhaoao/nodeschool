var http = require('http');
var through = require('through');



var server = http.createServer(function(req, res) {
	if (req.method === 'POST') {
		var write = function(buf) {
			this.queue(buf.toString().toUpperCase())
		};

		var end = function() {
			this.queue(null);
		}

		var tr = through(write, end);
		req.pipe(tr).pipe(res);
	}
});
server.listen(process.argv[2]);