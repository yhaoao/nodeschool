var fs = require('fs');

module.exports = function(dir, ext, callback) {
	var exp = new RegExp('.' + ext + '$')
	fs.readdir(dir, function(err, files) {
		if (err) {
			callback(err);
		} else {
			var result = [];
			files.forEach(function(file) {
				if (exp.test(file)) {
					result.push(file);
				}
			});

			callback(null,result);
		}


	});
}