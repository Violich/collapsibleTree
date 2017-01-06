//dependencies
var express = require('express');
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/test';

// create our router object
var router = express.Router();

// export our router
module.exports = router;

router.get('/', function(req, res) {
// create db call object
var dbCall = MongoClient.connect(url, function(err, db ) {
  assert.equal(null, err);

  var collection = db.collection('flare');

  collection.findOne({},{'_id': false}, function(err, queryObj) {
    assert.equal(null, err);
    //print query result to console
    console.log(queryObj);

    //define tree data with file
	//var file = 'data/flare.json';
    
    // define tree data with query data 
    var file = JSON.stringify(queryObj);
    
    //render tree
	res.render('index', { data: file });

    db.close();
  	});
  });
});