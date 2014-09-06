var trumpet = require('trumpet');
var through = require('through');
var fs = require('fs');


var tr = trumpet();
process.stdin.pipe(tr).pipe(process.stdout);

var stream = tr.select('.loud').createStream();

var th = through(function(buf){
	this.queue(buf.toString().toUpperCase());
});

stream.pipe(th).pipe(stream);


