var express = require('express');
var app = express();



app.set('port',(process.env.PORT || 5500));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index.html');
});


app.listen(5500);

// var MongoClient = require('mongodb').MongoClient,
// 		 assert = require('assert'),
// 		 express = require('express');
//
// /////////// Data base stuff //////////////////
// // Connection URL
// var url = 'mongodb://localhost:27017/sportstime';
// var database;
// // Use connect method to connect to the Server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");
//   database = db;
// });
// var app = express(), bodyParser = require('body-parser');
// var server = app.listen(8001, function () {
// 	// var host = server.address().address;
// 	// var port = server.address().port;
// });
// /////////////////////////////////////////////
//
//
// /////////// Views //////////////////////////
// // Import the tools needed to do parsing
//
// // app.use(bodyParser.json());
// // app.get('/rest/documents/', function (req, res) {
// // 	res.send([{'documenet': 1}]);
// // });
//
// // app.post('/rest/documents/', function (req, res) {
// // 	console.log(req.body);
// // 	res.send([{'documenet': 1}]);
// // });
//
// //call insertUser
// app.post('/SportsTime/insertUser/', function (req, res){
// 	// parse request
// 	var userInfo = req.body;
// 	console.log(userInfo);
// 	console.log(userInfo.username);
//
// 	// insert to db
// 	var users = database.collection('users');
// 	users.insert(userInfo, function(err, result){
// 		assert.equal(err, null);
// 		// return response
// 		res.send(result);
// 	});
// });
//
// // Call validateUser
// app.post('/rest/validateUser/', function (req, res){
// 	// parse request
// 	var userInfo = req.body;
// 	console.log(userInfo);
// 	console.log(userInfo.username);
//
// 	// insert to db
// 	var users = database.collection('users');
// 	users.find({"username":userInfo.username, "password":userInfo.password}, function(err, result){
// 		assert.equal(err, null);
// 		// return response
// 		res.send(result);
// 	});
// });
//
// ///////////////////////////////////////////
//
// /******* VALIDATIONS *******/
//
// //function validateNewUser(user) {
// //	if (!user.username) {
// //		return false;
// //	}
// //}
