exports.weeklySales = function(folderName) {
  var fs = require('fs'); //file system
  var inputSales1 = fs.readFileSync('./CSV/week1.csv', "utf8");
  var inputSales2 = fs.readFileSync('./CSV/week2.csv', "utf8");
  var inputSales3 = fs.readFileSync('./CSV/week3.csv', "utf8");
  var inputSales4 = fs.readFileSync('./CSV/week4.csv', "utf8"); //gets the first weeks contents
  inputSales1 = inputSales1.replace("Day,Date,stock item,No sold,Sales Price\n", "");
  inputSales2 = inputSales2.replace("Day,Date,stock item,No sold,Sales Price\n", "");
  inputSales3 = inputSales3.replace("Day,Date,stock item,No sold,Sales Price\n", "");
  inputSales4 = inputSales4.replace("Day,Date,stock item,No sold,Sales Price\n", ""); // removes the headings
  var interimArray1 = inputSales1.replace(/R/g, "").split('\n');
  var interimArray2 = inputSales2.replace(/R/g, "").split('\n');
  var interimArray3 = inputSales3.replace(/R/g, "").split('\n');
  var interimArray4 = inputSales4.replace(/R/g, "").split('\n'); //splits each itemsale by new line
  processedArray1 = []; //each item sale on a line
  processedArray2 = [];
  processedArray3 = [];
  processedArray4 = [];
  for (i = 0; i < interimArray1.length - 1; i++) {
    processedArray1.push(interimArray1[i].split(",")); //makes each item in each sale an array index
  }
  for (i = 0; i < interimArray2.length - 1; i++) {
    processedArray2.push(interimArray2[i].split(",")); //makes each item in each sale an array index
  }
  for (i = 0; i < interimArray3.length - 1; i++) {
    processedArray3.push(interimArray3[i].split(",")); //makes each item in each sale an array index
  }
  for (i = 0; i < interimArray4.length - 1; i++) {
    processedArray4.push(interimArray4[i].split(",")); //makes each item in each sale an array index
  }
  var salesList1 = [];
  var salesList2 = [];
  var salesList3 = [];
  var salesList4 = []; // Items and No sold

  processedArray1.forEach(function(array) {
    salesList1.push([array[2], Number(array[3]),[array[4]] ]); //pushes Item and No sold to salesList
  });
  processedArray2.forEach(function(array) {
    salesList2.push([array[2], Number(array[3]),[array[4]]]); //pushes Item and No sold to salesList
  });
  processedArray3.forEach(function(array) {
    salesList3.push([array[2], Number(array[3]),[array[4]]]); //pushes Item and No sold to salesList
  });
  processedArray4.forEach(function(array) {
    salesList4.push([array[2], Number(array[3]),[array[4]]]); //pushes Item and No sold to salesList
  });
  // console.log(salesList);
  salesList1.sort();
  salesList2.sort();
  salesList3.sort();
  salesList4.sort(); //sorts the list

  var weeklySales1 = []; //has stockItem and amount sold mapped
  var weeklySales2 = [];
  var weeklySales3 = [];
  var weeklySales4 = [];

  for (i = 1; i < salesList1.length; i++) { //maps stock item and amount sold.

    if (i % 7 === 0) {
      var stockItem = salesList1[i][0]; //if i % 7 then put that item with index 0 in stockItem (salesList index 0 = Item)
      var sold = 0; // amount sold
      var income = salesList1[i][2];

      for (j = 0; j < 7; j++) {
        sold += salesList1[i + j][1]; //gets the No sold
      }
      weeklySales1.push({ //pushes to weeklySales
        "stockItem": stockItem,
        "sold": sold,
        "income": Number(income)
      });
    }
  }
  for (i = 1; i < salesList2.length; i++) { //maps stock item and amount sold.

    if (i % 7 === 0) {
      var stockItem2 = salesList2[i][0]; //if i % 7 then put that item with index 0 in stockItem (salesList index 0 = Item)
      var sold2 = 0; // amount sold
      var income2 = salesList2[i][2];

      for (j = 0; j < 7; j++) {
        sold2 += salesList2[i][1]; //gets the No sold
      }
      weeklySales2.push({ //pushes to weeklySales
        "stockItem2": stockItem2,
        "sold": sold2,
        "income": Number(income2)
      });
    }
  }
  for (i = 1; i < salesList3.length; i++) { //maps stock item and amount sold.

    if (i % 7 === 0) {
      var stockItem3 = salesList3[i][0]; //if i % 7 then put that item with index 0 in stockItem (salesList index 0 = Item)
      var sold3 = 0; // amount sold
      var income3 = salesList3[i][2];

      for (j = 0; j < 7; j++) {
        sold3 += salesList3[i + j][1]; //gets the No sold
      }
      weeklySales3.push({ //pushes to weeklySales
        "stockItem": stockItem3,
        "sold": sold3,
        "income": Number(income3)
      });
    }
  }
  for (i = 1; i < salesList4.length; i++) { //maps stock item and amount sold.

    if (i % 7 === 0) {
      var stockItem4 = salesList4[i][0]; //if i % 7 then put that item with index 0 in stockItem (salesList index 0 = Item)
      var sold4 = 0; // amount sold
      var income4 = salesList4[i][2];

      for (j = 0; j < 7; j++) {
        sold4 += salesList4[i][1]; //gets the No sold
      }
      weeklySales4.push({ //pushes to weeklySales
        "stockItem": stockItem4,
        "sold": sold4,
        "income": Number(income4)
      });
    }
  }
// console.log(weeklySales2);
  var weeklySales = {"week1":weeklySales1, "week2":weeklySales2, "week3":weeklySales3, "week4":weeklySales4  };
  // weeklySales.join(",").split("");
  // console.log(weeklySales2);
  return weeklySales;
};
