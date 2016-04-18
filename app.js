var express = require('express');
var handlebars = require('express-handlebars');
var app = express();
app.use(express.static("public"));

app.engine('handlebars', handlebars({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');


// create a route
app.get('/', function (req, res) {
 res.render("index");
});
app.get('/week1', function (req, res) {
 res.render("week1");
});
//start the server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;

 console.log('Example app listening at http://%s:%s', host, port);

});
