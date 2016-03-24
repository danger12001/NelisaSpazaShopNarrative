exports.weeklySales2 = function(folderName){
var fs = require('fs'); //file system
var inputSales = fs.readFileSync('./CSV/week2.csv', "utf8"); //gets the first weeks contents
inputSales = inputSales.replace("Day,Date,stock item,No sold,Sales Price\n", ""); // removes the headings
var interimArray = inputSales.split('\n'); //splits each itemsale by new line
processedArray = []; //each item sale on a line

for (i = 0; i < interimArray.length - 1; i++) {
  processedArray.push(interimArray[i].split(",")); //makes each item in each sale an array index
}
// console.log(interimArray);
var salesList = []; // Items and No sold

processedArray.forEach(function(array) {
  salesList.push([array[2], Number(array[3])]); //pushes Item and No sold to salesList
});
salesList.sort(); //sorts the list
// console.log(salesList);

var weeklySales2 = []; //has stockItem and amount sold mapped

for (i = 1; i < salesList.length; i++) { //maps stock item and amount sold.

  if (i % 7 === 0) {
    var stockItem = salesList[i][0]; //every 7 items then put with index in stockItem (salesList index 0 = Item)
    var sold = 0; // amount sold

    for (j = 0; j < 7 ; j++) {
      sold += salesList[i][1]; //gets the No sold
    }
    weeklySales2.push({ //pushes to weeklySales
      "stockItem": stockItem,
      "sold": sold
    });
  }
}
// console.log(weeklySales2);
return weeklySales2;

};
