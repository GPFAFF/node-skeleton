/*GRAB PACKAGES*/
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

/*CONFIGURE APP*/
// Tell node where to look
app.use(express.static(__dirname + '/public'));
// Set the engine to view ejs
app.set('view engine', 'ejs');

/*SET THE ROUTES*/
app.get('/', function(req, res){
		res.render('pages/index');
});

ig.use({
	client_id: '9873603e937d45968de0a4db5831eccb',
	client_secret:	'12bc68f7b9584b5fbacf5306b56cc6e5'
});
/*PORT LEVEL TO VIEW PAGE*/
app.listen(2000);

console.log("Server has started");