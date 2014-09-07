var arg1 = process.argv[2];
var arg2 = process.argv[3];

// ' | &#39;
// " | &quot;
// < | &lt;
// > | &gt;
// & | &amp;


function html(strings, ...values) {
	var result = '';
	values[1] = values[1].replace(/&/g, "&amp;");
	values[1] = values[1].replace(/'/g, "&#39;");
	values[1] = values[1].replace(/"/g, "&quot;");
	values[1] = values[1].replace(/</g, "&lt;");
	values[1] = values[1].replace(/>/g, "&gt;");
	
	result += strings[0];
	result += values[0];
	result += strings[1];
	result += values[1];
	result += strings[2]

	//console.log(strings);
	//console.log(values)
	return result;
}

console.log(html `<b>${arg1} says</b>: "${arg2}"`);