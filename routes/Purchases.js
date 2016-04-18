var weeklySales = require("./weeklySales");
var fs = require("fs");
exports.Purchases = function() {
  var weeklySale = weeklySales.weeklySales();
  var weeklySales1 = weeklySale.week1;
  var weeklySales2 = weeklySale.week2;
  var weeklySales3 = weeklySale.week3;
  var weeklySales4 = weeklySale.week4;

  var purchase = fs.readFileSync('CSV/purchases.csv', "utf8");
  purchase = purchase.replace("Shop;Date;Item;Quantity;Cost;Total Cost\n", "");
  var interimArray = purchase.split('\n').join(".").split(';').join('.').split(".");

  var purchases = [];
  for (x = 0; x < interimArray.length - 1; x++) {
    if (x % 6 === 0) {
      var shop = interimArray[x];
      var item = interimArray[x + 2];
      var quantity = interimArray[x + 3];
      var cost = interimArray[x + 4];
      var totalcost = interimArray[x + 5];
      // console.log(stockItem);
      purchases.push({
        "shop": shop,
        "items": item,
        "quantity": quantity,
        "cost": cost,
        "totalCost":totalcost
      });
      // console.log(interimArray);
// console.log(purchases);
    }
  }
  // console.log(weeklySales1[0].stockItem);
  var op1 = [];
  for (x = 0; x < purchases.length; x++) {
    for (y = 0; y < weeklySales1.length; y++) {
      if (weeklySales1[y].stockItem == purchases[x].items) {
        var item = weeklySales1[y].stockItem;
        var quantity = purchases[x].quantity;
        var totalCost = purchases[x].totalCost;
        // console.log(amountsold);
        op1.push({item: item,
          quantity: quantity,
          totalCost: totalCost});
      }
    }
  }
  // console.log(op1);
  var op2 = [];
  for (x = 0; x < purchases.length; x++) {
    for (y = 0; y < weeklySales2.length; y++) {
      if (weeklySales2[y].stockItem2 == purchases[x].items) {
        var item = weeklySales2[y].stockItem2;
        var quantity = purchases[x].quantity;
        var totalCost = purchases[x].totalCost;
        // console.log(amountsold);
        op2.push({item: item,
          quantity: quantity,
          totalCost: totalCost});
      }
    }
  }
  // console.log(op2);
  var op3 = [];
  for (x = 0; x < purchases.length; x++) {
    for (y = 0; y < weeklySales3.length; y++) {
      if (weeklySales3[y].stockItem == purchases[x].items) {
        var item = weeklySales3[y].stockItem;
        var quantity = purchases[x].quantity;
        var totalCost = purchases[x].totalCost;
        // console.log(amountsold);
        op3.push({item: item,
          quantity: quantity,
          totalCost: totalCost});
      }
    }
  }
  // console.log(op3);
  var op4 = [];
  for (x = 0; x < purchases.length; x++) {
    for (y = 0; y < weeklySales4.length; y++) {
      if (weeklySales4[y].stockItem == purchases[x].items) {
        var item = weeklySales4[y].stockItem;
        var quantity = purchases[y].quantity;
        var totalCost = purchases[y].totalCost;
        // console.log(amountsold);
        op4.push({item: item,
          quantity: quantity,
          totalCost: totalCost});
      }
    }
  }
  // console.log(op4);
  var Purchases = {"week1": op1,"week2": op2,"week3": op3,"week4": op4};
// console.log(Purchases.week4);
  return Purchases;
};
