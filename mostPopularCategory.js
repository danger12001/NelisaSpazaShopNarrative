
var weeklySales = require("./weeklySales");
var fs = require("fs");
exports.mostPopularCategory = function() {
  var weeklySale = weeklySales.weeklySales();
  var weeklySales1 = weeklySale.week1;
  var weeklySales2 = weeklySale.week2;
  var weeklySales3 = weeklySale.week3;
  var weeklySales4 = weeklySale.week4;

  var category = fs.readFileSync('CSV/catagories.csv', "utf8");
  category = category.replace("Product,Category\n", "");
  var interimArray = category.split('\n').join(".").split(',').join('.').split(".");
  var categories = [];
  for (x = 0; x < interimArray.length - 1; x++) {
    if (x % 2 === 0) {
      var stockItem = interimArray[x];
      var categorys = interimArray[x + 1];
      // console.log(stockItem);
      categories.push({
        "stockItem": stockItem,
        "category": categorys
      });
      // console.log(interimArray);

    }
  }
  // console.log(weeklySales1[0].stockItem);
  var oc1 = [];
  for (x = 0; x < categories.length; x++) {
    for (y = 0; y < weeklySales1.length; y++) {
      if (weeklySales1[y].stockItem == categories[x].stockItem) {
        var cat = categories[x].category;
        var amountsold = weeklySales1[y].sold;
        // console.log(amountsold);
        oc1.push({amountsold: amountsold,
          category: cat});
      }
    }
  }
  var mpc1 = oc1.sort(function(a, b) {
    return parseFloat(b.amountsold) - parseFloat(a.amountsold);
});
var MostPopularCategory1 = mpc1[0];
var oc2 = [];
for (x = 0; x < categories.length; x++) {
  for (y = 0; y < weeklySales2.length; y++) {
    if (weeklySales2[y].stockItem2 == categories[x].stockItem) {
      var cat = categories[x].category;
      var amountsold = weeklySales2[y].sold;
      // console.log(amountsold);
      oc2.push({amountsold: amountsold,
        category: cat});
}
}
}
var mpc2 = oc2.sort(function(a, b) {
  return parseFloat(b.amountsold) - parseFloat(a.amountsold);
});
var MostPopularCategory2 = mpc2[0];

var oc3 = [];
for (x = 0; x < categories.length; x++) {
  for (y = 0; y < weeklySales3.length; y++) {
    if (weeklySales3[y].stockItem == categories[x].stockItem) {
      var cat = categories[x].category;
      var amountsold = weeklySales3[y].sold;
      oc3.push({amountsold: amountsold,
        category: cat});
    }
  }
}
var mpc3 = oc3.sort(function(a, b) {
  return parseFloat(b.amountsold) - parseFloat(a.amountsold);
});
var MostPopularCategory3 = mpc3[0];

var oc4 = [];
for (x = 0; x < categories.length; x++) {
  for (y = 0; y < weeklySales4.length; y++) {
    if (weeklySales4[y].stockItem == categories[x].stockItem) {
      var cat = categories[x].category;
      var item = categories[x].stockItem;
      var amountsold = weeklySales4[y].sold;
      // console.log(amountsold);
      oc4.push({amountsold: amountsold,
        category: cat});
    }
  }
}
var mpc4 = oc4.sort(function(a, b) {
  return parseFloat(b.amountsold) - parseFloat(a.amountsold);
});
// console.log(mpc4[0]);
var MostPopularCategory4 = mpc4[0];
var mostPopularCategory = {"week1":MostPopularCategory1.category,"week2":MostPopularCategory2.category,"week3":MostPopularCategory3.category,"week4":MostPopularCategory4.category};
return mostPopularCategory;

};
