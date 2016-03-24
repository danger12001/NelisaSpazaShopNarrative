var weeklySales1 = require('./processing');
var weeklySales2 = require('./processing');

exports.mostPopularProduct1 = function(weeklySales1){
weeklySales1.sort(function(a, b) { //sorts decending
  return b.sold - a.sold;
});
var mostPopularProduct1 = weeklySales1[0];
console.log(mostPopularProduct1);
// console.log(mostPopularProduct2);
// console.log("week 1: " + mostPopularProduct1 + '\n' + "week 2:" + mostPopularProduct2);
return mostPopularProduct1  ;
};
exports.mostPopularProduct2 = function(weeklySales2){
  weeklySales2.sort(function(a, b) { //sorts decending
    return b.sold - a.sold;
  });
  var mostPopularProduct2 = weeklySales2[0];
  console.log(mostPopularProduct2);
  return mostPopularProduct2;
};
