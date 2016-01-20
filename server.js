var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();


//Create the http server.
http.createServer(app).listen(8080);

//Create the '/' route for the server.
app.get('/', function(req, res){
	res.send('Hello from Express');
});

//Log status on the console. 
console.log('Server running!');