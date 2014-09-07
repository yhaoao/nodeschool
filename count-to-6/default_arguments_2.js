module.exports = function makeImportant(val, len=val.length) {
	return val+'!'.repeat(len);
};