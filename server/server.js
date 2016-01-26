var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();

//Add the static file serving middleware for node, on top of express.
//Note: Each static file folder needs to be added using an individual 
//express static object for each folder. 
app.use('/', express.static('../static'), express.static('../frontend'));

//Create the http server.
http.createServer(app).listen(80);

//Log status on the console. 
console.log('Server running!');
