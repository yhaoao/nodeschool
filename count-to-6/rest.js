

module.exports = function average(...args ) {
	var len=args.length;
	var sum = 0;
	args.forEach(function(value) {
		sum += value;
	});

	return sum/len;
};