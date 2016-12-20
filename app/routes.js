// require express
var express = require('express');
var path = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for homepage 
router.get('/', function(req, res) {
	//var dbCall = require('dbCall');
	//dbCall()
	var data = 'data/flare.json';
	res.render('pages/index', { data: data });
	// res.render('pages/index');
});
