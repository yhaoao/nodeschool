var http = require("q-io/http");

var sessionPromise=http.read('http://localhost:7000');

sessionPromise.then(function(content){

	var id=content.toString();

	return http.read('http://localhost:7001/'+id);
}).then(function(content){
	console.log(JSON.parse(content.toString()));
});
