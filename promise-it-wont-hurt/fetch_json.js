var q = require('q');
var http = require("q-io/http");

var result=http.read('http://localhost:1337');
result.then(function(content){
	return JSON.parse(content);
}).then(console.log);