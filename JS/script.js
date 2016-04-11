var fs = require("fs");
// var Handlebars = require('handlebars');
var handlebars = require('../node_modules/handlebars/dist/handlebars');
var mostPopularProduct = require('../mostPopularProduct');
var leastPopularProduct = require('../leastPopularProduct');
var mostPopularCategory = require('../mostPopularCategory');
var leastPopularCategory = require('../leastPopularCategory');
var mostProfitableProduct = require('../mostProfitableProduct');
var leastProfitableProduct = require('../leastProfitableProduct');

var source1  = "<h1>Week 1:</h1> <ul><li>Most Popular Product : {{mostPopularProduct}}</li><li>Least Popular Product: {{leastPopularProduct}}</li><li>Most Popular Category: {{mostPopularCategory}}</li><li>Least Popular Category: {{leastPopularCategory}}</li><li>Most Profitable Product: {{mostProfitableProduct}}</li><li>Least Profitable Product: {{leastProfitableProduct}}</li></ul><a href=../index.html> Home </a>";
var template1 = handlebars.compile(source1);
var context1 = {mostPopularProduct: mostPopularProduct.mostPopularProduct().week1, leastPopularProduct: leastPopularProduct.leastPopularProduct().week1, mostPopularCategory: mostPopularCategory.mostPopularCategory().week1,leastPopularCategory: leastPopularCategory.leastPopularCategory().week1,mostProfitableProduct: mostProfitableProduct.mostProfitableProduct().week1, leastProfitableProduct: leastProfitableProduct.leastProfitableProduct().week1 };
var html1    = template1(context1);

var source2  = "<h1>Week 2:</h1> <ul><li>Most Popular Product : {{mostPopularProduct}}</li><li>Least Popular Product: {{leastPopularProduct}}</li><li>Most Popular Category: {{mostPopularCategory}}</li><li>Least Popular Category: {{leastPopularCategory}}</li><li>Most Profitable Product: {{mostProfitableProduct}}</li><li>Least Profitable Product: {{leastProfitableProduct}}</li></ul><a href=../index.html> Home </a>";
var template2 = handlebars.compile(source2);
var context2 = {mostPopularProduct: mostPopularProduct.mostPopularProduct().week2, leastPopularProduct: leastPopularProduct.leastPopularProduct().week2, mostPopularCategory: mostPopularCategory.mostPopularCategory().week2,leastPopularCategory: leastPopularCategory.leastPopularCategory().week2,mostProfitableProduct: mostProfitableProduct.mostProfitableProduct().week2, leastProfitableProduct: leastProfitableProduct.leastProfitableProduct().week2 };
var html2    = template2(context2);
//
var source3  = "<h1>Week 3:</h1> <ul><li>Most Popular Product : {{mostPopularProduct}}</li><li>Least Popular Product: {{leastPopularProduct}}</li><li>Most Popular Category: {{mostPopularCategory}}</li><li>Least Popular Category: {{leastPopularCategory}}</li><li>Most Profitable Product: {{mostProfitableProduct}}</li><li>Least Profitable Product: {{leastProfitableProduct}}</li></ul><a href=../index.html> Home </a>";
var template3 = handlebars.compile(source3);
var context3 = {mostPopularProduct: mostPopularProduct.mostPopularProduct().week3, leastPopularProduct: leastPopularProduct.leastPopularProduct().week3, mostPopularCategory: mostPopularCategory.mostPopularCategory().week3,leastPopularCategory: leastPopularCategory.leastPopularCategory().week3,mostProfitableProduct: mostProfitableProduct.mostProfitableProduct().week3, leastProfitableProduct: leastProfitableProduct.leastProfitableProduct().week3 };
var html3    = template3(context3);
//
var source4  = "<h1>Week 4:</h1> <ul><li>Most Popular Product : {{mostPopularProduct}}</li><li>Least Popular Product: {{leastPopularProduct}}</li><li>Most Popular Category: {{mostPopularCategory}}</li><li>Least Popular Category: {{leastPopularCategory}}</li><li>Most Profitable Product: {{mostProfitableProduct}}</li><li>Least Profitable Product: {{leastProfitableProduct}}</li></ul><a href=../index.html> Home </a>";
var template4 = handlebars.compile(source4);
var context4 = {mostPopularProduct: mostPopularProduct.mostPopularProduct().week4, leastPopularProduct: leastPopularProduct.leastPopularProduct().week4, mostPopularCategory: mostPopularCategory.mostPopularCategory().week4,leastPopularCategory: leastPopularCategory.leastPopularCategory().week4,mostProfitableProduct: mostProfitableProduct.mostProfitableProduct().week4, leastProfitableProduct: leastProfitableProduct.leastProfitableProduct().week4 };
var html4    = template4(context4);


  fs.writeFileSync('../handlebars/week1.html', html1);
fs.writeFileSync('../handlebars/week2.html', html2);
fs.writeFileSync('../handlebars/week3.html', html3);
fs.writeFileSync('../handlebars/week4.html', html4);
