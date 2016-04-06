var weeklySales = require('./weeklySales');
exports.mostPopularProduct = function(){
  var weeklySale = weeklySales.weeklySales();
  var weeklySales1 = weeklySale.week1;
  var weeklySales2 = weeklySale.week2;
  var weeklySales3 = weeklySale.week3;
  var weeklySales4 = weeklySale.week4;
var mppw1 = weeklySales1.sort(function(a, b) {
  return b.sold - a.sold;
});
var mostPopularProduct1 = weeklySales1[0];
var mppw2 = weeklySales2.sort(function(a, b){
  return b.sold - a.sold;
});
var mostPopularProduct2 = mppw2[0];
var mppw3 = weeklySales3.sort(function(a, b){
  return b.sold - a.sold;
});
var mostPopularProduct3 = mppw3[0];
var mppw4 = weeklySales4.sort(function(a, b){
  return b.sold - a.sold;
});
var mostPopularProduct4 = mppw4[0];
var mostPopularProduct = {"week1":mostPopularProduct1.stockItem,"week2":mostPopularProduct2.stockItem2,"week3":mostPopularProduct3.stockItem,"week4":mostPopularProduct4.stockItem};
return mostPopularProduct;

};
