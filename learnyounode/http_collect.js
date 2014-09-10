var http = require('http');
var url = process.argv[2];


http.get(url, function(res) {
	var result='';
	res.on('data', function(data) {
		result+=data.toString();
	});

	res.on('end',function(){
		console.log(result.length);
		console.log(result);
	});
});