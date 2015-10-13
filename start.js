//start an array with a list of tables, and back the xml's of those tables daily.
var fs = require("fs");
var request = require("request");
var mkdir = require("mkdirp");
var date  = new Date();
var path = date+'';
var tables = ["sys_script_include","sys_script"];
var instanceName = "https://dev14396.service-now.com/";
var u = "";
var p = "";

console.log("storing the xml's in the following path : " + path)

mkdir(path, function (err) {
    if (err) console.error(err)
    else {
    	
		for(var i=0,len = tables.length; i<len; i++){
		var table = tables[i];
		var url = instanceName + table + ".do?XML"
		var r = request(url).auth(u,p,false);
		r.pipe(fs.createWriteStream(path+"/"+table+'.xml'))
		}

    }
});







