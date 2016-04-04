var weeklySales = require("./weeklySales");
var fs = require("fs");
exports.mostProfitableProduct = function() {
  var weeklySale = weeklySales.weeklySales();
  var weeklySales1 = weeklySale.week1;
  var weeklySales2 = weeklySale.week2;
  var weeklySales3 = weeklySale.week3;
  var weeklySales4 = weeklySale.week4;

  var purchases = fs.readFileSync('CSV/purchases.csv', "utf8");
  purchases = purchases.replace("Shop;Date;Item;Quantity;Cost;Total Cost", "").replace(/R/g, "");
  var interimArray = purchases.split('\n').join('.').split(";").join(".").split(".");
  // console.log(interimArray);
  var bought = [];
  for(x=0;x<interimArray.length - 1;x++){
    if(x % 6 === 0){
      var item = interimArray[x - 3];
      var quantity = interimArray[x - 2];
      var cost = interimArray[x - 1];
      // console.log(interimArray);
    bought.push({
      item: item,
      quantity: quantity,
      cost: cost
    });
  }
  }
  var w1 = [];
  for (x = 0; x < bought.length; x++) {
    for (y = 0; y < weeklySales1.length; y++) {
      if (weeklySales1[y].stockItem == bought[x].item) {
        var items = bought[x].item;
        var amountsold = weeklySales1[y].sold;
        var amountBought = bought[x].quantity;
        var costs = bought[x].cost;
        // console.log(costs);
        var totalcosts = costs * amountBought;

        w1.push({item: items,
                totalcost: costs * amountBought,
                });
      }
    }
  }
  // console.log(w1);
};
