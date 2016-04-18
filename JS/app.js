var express = require('express');
var app = express();
var fs = require('fs');

var index = String(fs.readFileSync("../index.html"));
var week1 = String(fs.readFileSync("../Views/week1.html"));


// create a route
app.get('/', function (req, res) {
  app.use(express.static('public'));
  app.use(express.static('files'));
 res.send(index);
});
app.get('/Views/week1.html', function(req, res) {
  res.send(week1);
});
//start the server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;

 console.log('Example app listening at http://%s:%s', host, port);

});
