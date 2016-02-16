'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

var appRoot = __dirname + '/app';
var port = process.env.PORT || 3000;

/* express */
var app = express();
app.use(favicon(__dirname + '/assets/img/favicon.ico'));
app.use(express.static(__dirname + '/app'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.get('/getModules', function (req, res) {
	var modules = [];
	return res.json(modules);
});

app.all('*', function (req, res, next) {
	res.sendFile('index.html', {root: __dirname + '/app'});
});

var server = app.listen(port, function () {
	var port = server.address().port;

	console.log('incomeperspectives is listening on port %s', port);
});
