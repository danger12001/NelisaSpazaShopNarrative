var fs = require("fs");
// var Handlebars = require('handlebars');
var handlebars = require('../node_modules/handlebars/dist/handlebars');
var mostPopularProduct = require('../mostPopularProduct');
var leastPopularProduct = require('../leastPopularProduct');
var mostPopularCategory = require('../mostPopularCategory');
var leastPopularCategory = require('../leastPopularCategory');
var mostProfitableProduct = require('../mostProfitableProduct');
var leastProfitableProduct = require('../leastProfitableProduct');
var weeklySales = require('../weeklySales');

var week1 = String(fs.readFileSync("../handlebars/week1.hdb"));
var week2 = String(fs.readFileSync("../handlebars/week2.hdb"));
var week3 = String(fs.readFileSync("../handlebars/week3.hdb"));
var week4 = String(fs.readFileSync("../handlebars/week4.hdb"));

var Sales = weeklySales.weeklySales();
var week1Sales = Sales.week1;
var week2Sales = Sales.week2;
var week3Sales = Sales.week3;
var week4Sales = Sales.week4;


var source1  = week1;
var template1 = handlebars.compile(source1);
var context1 = {mostPopularProduct: mostPopularProduct.mostPopularProduct().week1, leastPopularProduct: leastPopularProduct.leastPopularProduct().week1, mostPopularCategory: mostPopularCategory.mostPopularCategory().week1,leastPopularCategory: leastPopularCategory.leastPopularCategory().week1,mostProfitableProduct: mostProfitableProduct.mostProfitableProduct().week1, leastProfitableProduct: leastProfitableProduct.leastProfitableProduct().week1, weeklySales: week1Sales };
var html1    = template1(context1);

var source2  = week2;
var template2 = handlebars.compile(source2);
var context2 = {mostPopularProduct: mostPopularProduct.mostPopularProduct().week2, leastPopularProduct: leastPopularProduct.leastPopularProduct().week2, mostPopularCategory: mostPopularCategory.mostPopularCategory().week2,leastPopularCategory: leastPopularCategory.leastPopularCategory().week2,mostProfitableProduct: mostProfitableProduct.mostProfitableProduct().week2, leastProfitableProduct: leastProfitableProduct.leastProfitableProduct().week2, weeklySales: week2Sales };
var html2    = template2(context2);
//
var source3  = week3;
var template3 = handlebars.compile(source3);
var context3 = {mostPopularProduct: mostPopularProduct.mostPopularProduct().week3, leastPopularProduct: leastPopularProduct.leastPopularProduct().week3, mostPopularCategory: mostPopularCategory.mostPopularCategory().week3,leastPopularCategory: leastPopularCategory.leastPopularCategory().week3,mostProfitableProduct: mostProfitableProduct.mostProfitableProduct().week3, leastProfitableProduct: leastProfitableProduct.leastProfitableProduct().week3, weeklySales: week3Sales };
var html3    = template3(context3);
//
var source4  = week4;
var template4 = handlebars.compile(source4);
var context4 = {mostPopularProduct: mostPopularProduct.mostPopularProduct().week4, leastPopularProduct: leastPopularProduct.leastPopularProduct().week4, mostPopularCategory: mostPopularCategory.mostPopularCategory().week4,leastPopularCategory: leastPopularCategory.leastPopularCategory().week4,mostProfitableProduct: mostProfitableProduct.mostProfitableProduct().week4, leastProfitableProduct: leastProfitableProduct.leastProfitableProduct().week4, weeklySales: week4Sales };
var html4    = template4(context4);


fs.writeFileSync('../Views/week1.html', html1);
fs.writeFileSync('../Views/week2.html', html2);
fs.writeFileSync('../Views/week3.html', html3);
fs.writeFileSync('../Views/week4.html', html4);
