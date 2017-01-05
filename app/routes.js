// require express
var express = require('express');
var path = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for homepage 
router.get('/', function(req, res) {
	var file = 'data/flare.json';
	//var dbCall = require('./dbCall');
	res.render('index', { data: file });
});
