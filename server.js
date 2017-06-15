'use strict';
var http = require('http');
var port = process.env.PORT || 80;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to '+ req.headers.host +' This is a sample Node.JS application.  You may delete/replace all files within your content directory as these are dependancies to run this sample application.\n');
}).listen(port);
