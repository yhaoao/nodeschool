var http = require('http');
var async = require('async');

var url = process.argv[2];

var count = 0;
var body = '';

async.whilst(
	function() {

		return body.trim()!='meerkat';
	},
	function(callback) {
		count++;

		body = '';

		http.get(url, function(res) {
			res.on('data', function(chunck) {
				body += chunck.toString();
			});

			res.on('end', function() {
				callback();
			})
		}).on('error', function(e) {
			callback(e);
		});
	},
	function(err) {
		console.log(count);
	}
);