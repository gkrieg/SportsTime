var express = require('express');
var app = express();

app.set('port',(process.env.PORT || 5500));
app.use(express.static(__dirname + '/public'));

console.log("Hello World");
