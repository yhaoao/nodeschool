var q=require('q');
var defer = q.defer();
var promise=defer.promise;

setTimeout(function(){
	defer.resolve('RESOLVED!');
},300);

promise.then(function(value){
	console.log(value);
});