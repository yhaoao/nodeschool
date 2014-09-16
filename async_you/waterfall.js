var fs=require('fs');
var http=require('http');
var async=require('async');

var filePath=process.argv[2];

async.waterfall([
		function(cb){
			fs.readFile(filePath,function(err,data){
				if(err){
					cb(err);
				}else{
					cb(null,data.toString());
				}
			});
		},
		function(url,cb){
			var body='';

			http.get(url,function(res){
				res.on('data',function(chunck){
					body+=chunck.toString();
				});

				res.on('end',function(){
					cb(null,body);
				})
			}).on('error',function(e){
				cb(e);
			});
		}
	],function(err,result){
		if(err){
			console.log(err);
		}else{
			console.log(result);
		}
	});
