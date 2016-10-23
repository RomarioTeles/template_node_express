
var express = require(__dirname + '/config/express')();
require(__dirname+'/config/database')('mongodb://localhost:27017/bdname');

var app = express;

app.listen(3000, function(){
	console.log('Server works');
});
