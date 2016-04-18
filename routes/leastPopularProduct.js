var weeklySales = require('../routes/weeklySales');
exports.leastPopularProduct = function(){
  var weeklySale = weeklySales.weeklySales();
  var weeklySales1 = weeklySale.week1;
  var weeklySales2 = weeklySale.week2;
  var weeklySales3 = weeklySale.week3;
  var weeklySales4 = weeklySale.week4;
var lppw1 = weeklySales1.sort(function(a, b) {
  return a.sold - b.sold;
});
var leastPopularProduct1 = weeklySales1[0];
var lppw2 = weeklySales2.sort(function(a, b){
  return a.sold - b.sold;
});
var leastPopularProduct2 = lppw2[0];
var lppw3 = weeklySales3.sort(function(a, b){
  return a.sold - b.sold;
});
var leastPopularProduct3 = lppw3[0];
var lppw4 = weeklySales4.sort(function(a, b){
  return a.sold - b.sold;
});
var leastPopularProduct4 = lppw4[0];

var leastPopularProduct = {"week1":leastPopularProduct1.stockItem,"week2":leastPopularProduct2.stockItem2,"week3":leastPopularProduct3.stockItem,"week4":leastPopularProduct4.stockItem};
return leastPopularProduct;

};
