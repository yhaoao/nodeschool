var spawn = require('child_process').spawn;
var duplexer = require('duplexer');

module.exports = function(cmd, args) {
	var cmd = spawn(cmd, args);

	return duplexer(cmd.stdin, cmd.stdout);
};