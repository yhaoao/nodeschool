 var concat = require('concat-stream');

 process.stdin
	.pipe(concat(function(temp){
		temp=temp||'';
		var result=temp.toString().split('').reverse().join('');
		process.stdout.write(result);
	}));