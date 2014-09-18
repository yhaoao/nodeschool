var q=require('q');

var defer = q.defer();
setTimeout(function(){
	defer.reject('REJECTED!');
},300);

defer.promise.then(null,function(value){
	console.log(value);
});