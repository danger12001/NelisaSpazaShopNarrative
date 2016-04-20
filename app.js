var express = require('express');
var handlebars = require('express-handlebars');
var app = express();
var mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser');

var mostPopularProduct = require('./routes/mostPopularProduct');
var leastPopularProduct = require('./routes/leastPopularProduct');
var mostPopularCategory = require('./routes/mostPopularCategory');
var leastPopularCategory = require('./routes/leastPopularCategory');
var mostProfitableProduct = require('./routes/mostProfitableProduct');
var mostProfitableCategory = require('./routes/mostProfitableCategory');
var weeklySales = require('./routes/weeklySales');

app.use(express.static("public"));

var dbOptions = {
      host: 'localhost',
      user: 'root',
      password: '5550121a',
      port: 3000,
      database: 'Nelisa'
    };


app.use(myConnection(mysql, dbOptions, 'single'));

app.engine('handlebars', handlebars({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');


var Sales = weeklySales.weeklySales();
var week1Sales = Sales.week1;
var week2Sales = Sales.week2;
var week3Sales = Sales.week3;
var week4Sales = Sales.week4;

var week1 = {mostPopularProduct: mostPopularProduct.mostPopularProduct().week1, leastPopularProduct: leastPopularProduct.leastPopularProduct().week1, mostPopularCategory: mostPopularCategory.mostPopularCategory().week1,leastPopularCategory: leastPopularCategory.leastPopularCategory().week1,mostProfitableProduct: mostProfitableProduct.mostProfitableProduct().week1, mostProfitableCategory: mostProfitableCategory.mostProfitableCategory().week1, weeklySales: week1Sales };
var week2 = {mostPopularProduct: mostPopularProduct.mostPopularProduct().week2, leastPopularProduct: leastPopularProduct.leastPopularProduct().week2, mostPopularCategory: mostPopularCategory.mostPopularCategory().week2,leastPopularCategory: leastPopularCategory.leastPopularCategory().week2,mostProfitableProduct: mostProfitableProduct.mostProfitableProduct().week2, mostProfitableCategory: mostProfitableCategory.mostProfitableCategory().week2, weeklySales: week2Sales };
var week3 = {mostPopularProduct: mostPopularProduct.mostPopularProduct().week3, leastPopularProduct: leastPopularProduct.leastPopularProduct().week3, mostPopularCategory: mostPopularCategory.mostPopularCategory().week3,leastPopularCategory: leastPopularCategory.leastPopularCategory().week3,mostProfitableProduct: mostProfitableProduct.mostProfitableProduct().week3, mostProfitableCategory: mostProfitableCategory.mostProfitableCategory().week3, weeklySales: week3Sales };
var week4 = {mostPopularProduct: mostPopularProduct.mostPopularProduct().week4, leastPopularProduct: leastPopularProduct.leastPopularProduct().week4, mostPopularCategory: mostPopularCategory.mostPopularCategory().week4,leastPopularCategory: leastPopularCategory.leastPopularCategory().week4,mostProfitableProduct: mostProfitableProduct.mostProfitableProduct().week4, mostProfitableCategory: mostProfitableCategory.mostProfitableCategory().week1, weeklySales: week4Sales };

// create a route
app.get('/', function (req, res) {
 res.render("index");
});

app.get('/week1', function (req, res) {

 res.render("week1", week1);
});

app.get('/week2', function (req, res) {
 res.render("week2", week2);
});

app.get('/week3', function (req, res) {
 res.render("week3", week3);
});

app.get('/week4', function (req, res) {
 res.render("week4", week4);
});
//start the server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;

 console.log('Spaza-Shop app listening at http://%s:%s', host, port);

});
