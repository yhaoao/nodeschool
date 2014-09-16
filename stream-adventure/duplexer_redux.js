var duplexer = require('duplexer');

module.exports = function(counter) {
 	// return a duplex stream to capture countries on the writable side
 	// and pass through `counter` on the readable side

 	return duplexer(counter, cmd.stdout);
 };