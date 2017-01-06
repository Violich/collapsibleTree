//dependencies
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
// Connection URL
var url = 'mongodb://localhost:27017/test';

// create db call object
var dbCall = MongoClient.connect(url, function(err, db ) {
  assert.equal(null, err);

  var collection = db.collection('flare');

  collection.findOne({},{'_id': false}, function(err, queryObj) {
    assert.equal(null, err);
    //console.log(queryObj);
    return (queryObj);
    db.close();
  });
});
console.log(dbCall);
// export db call
module.exports = dbCall;