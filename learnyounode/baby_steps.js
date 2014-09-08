var nums=process.argv.slice(2);
var sum=0;
nums.forEach(function(num){
	sum+=parseInt(num);
});

console.log(sum);