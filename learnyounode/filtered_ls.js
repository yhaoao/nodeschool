var fs = require('fs');
var dirPath = process.argv[2];
var ext = process.argv[3];
var exp=new RegExp('.'+ext+'$')

fs.readdir(dirPath, function(err, files) {
	files.forEach(function(file) {
		if (exp.test(file)){
			console.log(file);
		}
	});

});