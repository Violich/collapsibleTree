// require our dependencies
var express        = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser     = require('body-parser');
var app            = express();
var port           = 8088;
var path = require('path');

//use ejs and express layoutss
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));

// use body parser
app.use(bodyParser.urlencoded());

// route our app
//var router = require('./app/routes');
//app.use('/', router);

// set static files (css and images, etc) locations
app.use(express.static(__dirname + '/public'));
require('./routes/routes.js')(app);

// start the server
app.listen(port, function() {
	console.log('app started')
});