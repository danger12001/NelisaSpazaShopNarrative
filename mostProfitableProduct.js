var weeklySales = require("./weeklySales");
// var purchases = require("./CSV/purchases.csv");
var fs = require("fs");
exports.mostProfitableProduct = function() {
  var weeklySale = weeklySales.weeklySales();
  var weeklySales1 = weeklySale.week1;
  var weeklySales2 = weeklySale.week2;
  var weeklySales3 = weeklySale.week3;
  var weeklySales4 = weeklySale.week4;

  var purchases = fs.readFileSync('CSV/purchases.csv', "utf8");
  purchases = purchases.replace("Shop;Date;Item;Quantity;Cost;Total Cost", "");
  var interimArray = purchases.split('\n').join(" ").split(";");
  console.log(interimArray);
  // var categories = [];
  // for (x = 0; x < interimArray.length - 1; x++) {
  //   if (x % 2 === 0) {
  //     var stockItem = interimArray[x];
  //     var categorys = interimArray[x + 1];
  //     // console.log(stockItem);
  //     categories.push({
  //       "stockItem": stockItem,
  //       "category": categorys
  //     });
};
