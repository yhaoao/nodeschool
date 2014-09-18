var q = require('q');

var d1=q.defer();
var d2=q.defer();

var p1=d1.promise;
var p2=d2.promise;

var all=function(p1,p2){
	var d=q.defer();
	var p=d.promise;
	var counter=0;
	var vals=[];

	p1.then(function(val){
		vals.push(val);
		counter+=1;
		if(counter===2){
			d.resolve(vals);
		}
	},function(val){
		d.reject(val);
	});

	p2.then(function(val){
		vals.push(val);
		counter+=1;
		if(counter===2){
			d.resolve(vals);
		}
	},function(val){
		d.reject(val);
	});

	return p;
};

all(p1,p2).then(console.log);

setTimeout(function(){
	d1.resolve('PROMISES');
	d2.resolve('FTW');
},200);