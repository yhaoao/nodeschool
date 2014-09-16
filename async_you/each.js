var http = require('http');
var async = require('async');

var urlOne = process.argv[2];
var urlTwo = process.argv[3];

async.each([urlOne, urlTwo], function(url, done) {
    http.get(url, function(res) {
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
  function(err) {
    if (err) console.log(err);
  });