var filterLs=require('./filtered_ls_module');
var dirPath = process.argv[2];
var ext = process.argv[3];

filterLs(dirPath,ext,function(err,result){
	result.forEach(function(item){
		console.log(item);
	});
});
