var MongoClient = require('mongodb').MongoClient,
		 assert = require('assert'),
		 express = require('express');

/////////// Data base stuff //////////////////
// Connection URL
var url = 'mongodb://52.25.86.243:27017/sportstime';
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
var port = process.env.PORT || 5000
var server = app.listen(port, function () {
	var host = server.address().address;
	console.log('Listening on ' + host + port);
});
/////////////////////////////////////////////

app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/profile', function(req, res) {
    res.render('profile.html');
});



/////////// Views //////////////////////////

//call insertUser
app.post('/sportstime/insertUser/', function (req, res){
	// parse request
	var userInfo = req.body;
	console.log("HERE IS IT");
	console.log(userInfo);
	// insert to db
	var users = database.collection('users');
	users.insert(userInfo, function(err, result){
		assert.equal(err, null);
		console.log("HERE IS IT");
		console.log(result);
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
		console.log("HERE IS THE OTHER RESULT")
		console.log(result);
		res.send(result);
	});
});

// call insertSport
app.post('/rest/sportstime/insertSport/', function (req, res){
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
app.post('/rest/sportstime/insertEvent/', function (req, res){
	// parse request
	var eventInfo = req.body;
	var sport = eventInfo.sport_id;
	console.log(sport);
	
	// insert to db
	var events = database.collection('events');
	events.insert(eventInfo, function(err, result){
		assert.equal(err, null);
		// return response
		console.log(result);
		console.log(result.sport);
		res.send(result);
	});
});

// call getEvents by sport
app.post('/rest/sportstime/getEvents/', function (req, res){
	// parse request
	var targetSport = req.body;

	var sports = database.collection('sports');
	sports.find({"sport":targetSport.sport}).toArray(function(err, resultSport){
		assert.equal(err, null);
		var events = database.collection('events');
		events.find({"sport":resultSport[0].sport}).toArray(function(err, resultEvents){
		assert.equal(err, null);
		// return response
		res.send(resultEvents);
		});
	});
	// insert to db

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
