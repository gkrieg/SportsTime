var express = require('express');
var app = express();



app.set('port',(process.env.PORT || 5500));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(5500);
