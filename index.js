var MongoClient = require('mongodb').MongoClient,
		 assert = require('assert'),
		 express = require('express');

/////////// Data base stuff //////////////////
// Connection URL
var url = 'mongodb://localhost:27017/sportstime';
var database;
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  database = db;
});
var app = express(), bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var server = app.listen(8001, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Listening on ' + host + port);
});
/////////////////////////////////////////////

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.render('index.html');
});

/////////// Views //////////////////////////

//call insertUser
app.post('/sportstime/insertUser/', function (req, res){
	// parse request
	var userInfo = req.body;
	// insert to db
	var users = database.collection('users');
	users.insert(userInfo, function(err, result){
		assert.equal(err, null);
		// return response
		res.send(result);
	});
});

// Call validateUser
app.post('/sportstime/validateUser/', function (req, res){
	// parse request
	var userInfo = req.body;

	// insert to db
	var users = database.collection('users');
	users.find(userInfo).toArray(function(err, result){
		assert.equal(err, null);
		// return response
		res.send(result);
	});
});

// call insertSport
app.post('/sportstime/insertSport/', function (req, res){
	// parse request
	var sportInfo = req.body;

	// insert to db
	var sports = database.collection('sports');
	sports.insert(sportInfo, function(err, result){
		assert.equal(err, null);
		// return response
		res.send(result);
	});
});

// call getSportList
app.get('/sportstime/getSportList/', function (req, res){
	// insert to db
	var sports = database.collection('sports');
	sports.find({}).toArray(function(err, result){
		assert.equal(err, null);
		// return response
		res.send(result);
	});
});

// call insertEvent
app.post('/sportstime/insertEvent/', function (req, res){
	// parse request
	var eventInfo = req.body;

	// insert to db
	var events = database.collection('events');
	events.insert(eventInfo, function(err, result){
		assert.equal(err, null);
		// return response
		res.send(result);
	});
});

// call getEvents by sport
app.post('/sportstime/getEvents/', function (req, res){
	// parse request
	var targetEvent = req.body;

	// insert to db
	var events = database.collection('events');
	events.find({"sport_id":targetEvent.sport_id}).toArray(function(err, result){
		assert.equal(err, null);
		// return response
		res.send(result);
	});
});

// call addPersonToEvent
app.post('/sportstime/addPersonToEvent/', function (req, res){
	// parse request
	var additionInfo = req.body;

	// insert to db
	var events = database.collection('events');
	events.update({"_id":additionInfo._id},
		{ $push: {"person_id":additionInfo.person_id}}, function(err, result){
		assert.equal(err, null);
		// return response
		res.send(result);
	});
});
///////////////////////////////////////////


// 	// insert to db
// 	var users = database.collection('users');
// 	users.find({"username":userInfo.username, "password":userInfo.password}, function(err, result){
// 		assert.equal(err, null);
// 		// return response
// 		res.send(result);
// 	});
// });

// ///////////////////////////////////////////

// /******* VALIDATIONS *******/

// //function validateNewUser(user) {
// //	if (!user.username) {
// //		return false;
// //	}
// //}
