var http = require('http');
var async = require('async');

var urlOne = process.argv[2];
var urlTwo = process.argv[3];

async.map([urlOne, urlTwo], function(url, done) {
    var body='';
    
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
  function(err, results) {
    if (err) return console.log(err);
    console.log(results);
  });