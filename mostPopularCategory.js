var weeklySales = require("./weeklySales");
var fs = require("fs");
exports.mostPopularCategory = function(){
  var weeklySale = weeklySales.weeklySales();
  var weeklySales1 = weeklySale.week1;
  var weeklySales2 = weeklySale.week2;
  var weeklySales3 = weeklySale.week3;
  var weeklySales4 = weeklySale.week4;

  var category = fs.readFileSync('CSV/catagories.csv', "utf8");
  category = category.replace("Product,Category\n", "");
  var interimArray = category.split('\n').join(".").split(',').join('.').split(".");
  var categories = [];
  for(x=0;x<interimArray.length -1;x++){
    if(x % 2 === 0){
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
  for(x=0;x<categories.length;x++){
    for(y=0;y<weeklySales1.length;y++){
      if(weeklySales1[y].stockItem == categories[x].stockItem){
        var cat = categories[x].category;
        var item = categories[x].stockItem;
        var amountsold = weeklySales1[y].sold;
        console.log(amountsold);
        oc1.push(amountsold + " " + item + " - " + cat);
    }
      // console.log(weeklySales1[x]);
      // console.log(categories[x].stockItem);
    }
  }
  var mpc1 = oc1.sort(function(a, b){
    return b.amountsold - a.amountsold;
  });
  oc1.sort();
  console.log(oc1);
  // console.log(mpc1);

  // console.log(test);
    // var oc1 = [];
  // for(x=0;x<weeklySales1.length;x++){
  //   if(weeklySales1[x].stockItem == categories[x].stockItem){
  //     var match = categories[x].category;
  //     // console.log(match);
  //     var oc1 = {stockItem: weeklySales1[x].stockItem, category: match};
  //     // console.log(oc1);
  //     return oc1;
  //   }
  // }
};
