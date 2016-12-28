var express = require('express')
,	path = require('path')
, 	session = require('express-session')
,	cookieParser = require('cookie-parser')
,	bodyParser = require('body-parser')
,   methodOverride = require('express-method-override')
, 	eLoad = require('express-load')
,	engines = require('consolidate')
,	mongoose = require('mongoose')

module.exports = function(){

	var app = express();

	app.set('port', 3000);

	app.use(cookieParser('app'));

	app.use(session({
	    secret: 'app',
	    saveUninitialized: true, // don't create session until something stored
		resave: true //don't save session if unmodified
	}));

	app.use(bodyParser.json());

	app.use(bodyParser.urlencoded({
		extended:true
	}));

	//app.use(express.static(path.join(__dirname,'/public')));

	app.use("/node_modules", express.static('node_modules'));

	//app.use("/js", express.static('public/js'));

	//app.use("/css", express.static('public/css'));

	//app.use("/views", express.static('public/views'));

	//app.use("/img", express.static('public/img'));

	//app.set('views', 'public/views');

	//app.engine('html', engines.mustache);

	//app.set('view engine', 'html');

	eLoad('models')
		.then('controllers')
		.then('routes')
		.into(app);

	app.get('/', function(req, res){
		res.json("Server works");
	});

	return app;
}
