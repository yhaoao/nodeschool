var net = require('net');
var moment = require('moment');
var port = parseInt(process.argv[2], 10);

var server = net.createServer(function(socket) {
	var now = moment().format("YYYY-MM-DD HH:mm");  ;
	socket.write(now.toString());
	socket.end();
})
server.listen(port)