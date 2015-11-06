var express = require('express');
var app = express();

app.set('port',(process.env.PORT || 5500));
app.use(express.static(__dirname + '/public'));

var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(5500);
