var through = require('through');
var tr = through(write, end);
// tr.write('beep\n');
// tr.write('boop\n');
// tr.end();

function write(buf) {
	this.queue(buf.toString().toUpperCase())
}

function end() {
	//console.log('__END__')
}

process.stdin.pipe(tr).pipe(process.stdout);