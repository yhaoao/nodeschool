var async = require('async');
var http = require('http');

var urlOne = process.argv[2];
var urlTwo = process.argv[3];

async.series({
  requestOne: function(done) {
    var body = '';

    http.get(urlOne, function(res) {
      res.on('data', function(chunck) {
        body += chunck.toString();
      });

      res.on('end', function() {
        done(null, body);
      })
    }).on('error', function(e) {
      done(e);
    });
  },

  requestTwo: function(done) {
    var body = '';

    http.get(urlTwo, function(res) {
      res.on('data', function(chunck) {
        body += chunck.toString();
      });

      res.on('end', function() {
        done(null, body);
      })
    }).on('error', function(e) {
      done(e);
    });
  }
}, function(err, result) {
  console.log(result);
  // results will be {one: 1, two: 2}
});