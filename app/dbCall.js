//dependencies
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
// Connection URL
var url = 'mongodb://localhost:27017/test';

// create db call object
var dbCall = MongoClient.connect(url, connect_action);

// export db call
module.exports = dbCall;

function getColl(db, callback) {
  // Get the documents collection
  var collection = db.collection('flare');
  // Find some documents
    collection.findOne({},{'_id': false}, function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

function connect_action(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    getColl(db, function() {
      db.close();
    });
}



