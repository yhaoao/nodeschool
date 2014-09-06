var split = require('split');
var through = require('through');

var isOdd=true;
process.stdin
	.pipe(split())
	.pipe(through(function(line) {
		if(isOdd){
			this.queue(line.toLowerCase()+'\n');
			isOdd=false;
		}else{
			this.queue(line.toUpperCase()+'\n');
			isOdd=true;
		}
	})).pipe(process.stdout);