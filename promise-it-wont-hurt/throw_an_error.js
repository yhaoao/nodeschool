var q=require('q');

var value= process.argv[2];

var parsePromised=function(value){
	var defer = q.defer();

	try{
		var result=JSON.parse(value);
		defer.resolve(result);
	}catch(e){
		defer.reject(e);
	}

	return defer.promise;
	
}

parsePromised(value).then(console.log,console.log);