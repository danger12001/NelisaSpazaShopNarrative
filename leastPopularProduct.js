var weeklySales1 = require('./processing');
exports.leastPopularProduct = function(weeklySales){
weeklySales.sort(function(b, a) { //sorts decending
  return b.sold - a.sold;
});

var leastPopularProduct = weeklySales[0];
// console.log(leastPopularProduct);
return leastPopularProduct;
};
