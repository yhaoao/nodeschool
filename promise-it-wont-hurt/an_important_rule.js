var q = require('q');

var throwMyGod=function(){
	throw new Error('OH NOES');
}

var iterate=function(val){
	console.log(val);
	return val+1;
}

q.fcall(iterate,1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(console.log);

//var iteratePromise=q.fcall(iterate);