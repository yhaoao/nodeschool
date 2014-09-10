var async = require('async');
var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var getUrlData = function(url, callback) {
	http.get(url, function(res) {
		var result = '';
		res.on('data', function(data) {
			result += data.toString();
		});

		res.on('end', function() {
			callback(null,result);
		});
	});
};

async.parallel([
		function(callback) {
			getUrlData(url1, callback);
		},
		function(callback) {
			getUrlData(url2, callback);
		},
		function(callback) {
			getUrlData(url3, callback);
		}
	],
	function(err, results) {
		results.forEach(function(result){
			console.log(result);
		});
	});