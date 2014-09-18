var q = require('q');

var value = process.argv[2];


var parsePromised = function(value) {
	return q.fcall(function() {
		return JSON.parse(value);
	});
}

parsePromised(value).then(null, console.log);