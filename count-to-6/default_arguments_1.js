function sayHello(greeting = "Hello", name = "CampJS") {
	console.log(`${greeting} ${name}!`);
}

module.exports = function midpoint(lower = 0, upper = 1) {
	return (lower+upper)/2
};