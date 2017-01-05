module.exports = function(app) {
// route for homepage 
var db = require('./connection.js').db;

app.get('/', function(req, res) {
	console.log("Test");
	var cursor = db.collection('flare').findOne({},{'_id': false}, function(err, docs) {
      console.log("Found the following records");
      console.log(docs);
    });
    res.render('index', { data: cursor });
 });
}