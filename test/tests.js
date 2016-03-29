var assert = require('assert');
var weeklySales = require('../weeklySales');
var mostPopularProduct = require('../mostPopularProduct');

describe("weeklySales",function(){
  it("should return a map of the sales for the month",function(){
    var result = weeklySales.weeklySales();
    assert.deepEqual(result,[ [ { stockItem: 'Bananas - loose', sold: 47 },
    { stockItem: 'Bread', sold: 45 },
    { stockItem: 'Chakalaka Can', sold: 23 },
    { stockItem: 'Coke 500ml', sold: 54 },
    { stockItem: 'Cream Soda 500ml', sold: 22 },
    { stockItem: 'Fanta 500ml', sold: 33 },
    { stockItem: 'Gold Dish Vegetable Curry Can', sold: 17 },
    { stockItem: 'Imasi', sold: 30 },
    { stockItem: 'Iwisa Pap 5kg', sold: 17 },
    { stockItem: 'Milk 1l', sold: 39 },
    { stockItem: 'Mixed Sweets 5s', sold: 49 },
    { stockItem: 'Shampoo 1 litre', sold: 3 },
    { stockItem: 'Soap Bar', sold: 12 },
    { stockItem: 'Top Class Soy Mince', sold: 22 } ],
  [ { stockItem2: 'Bananas - loose', sold: 47 },
    { stockItem2: 'Bread', sold: 45 },
    { stockItem2: 'Chakalaka Can', sold: 23 },
    { stockItem2: 'Coke 500ml', sold: 54 },
    { stockItem2: 'Cream Soda 500ml', sold: 22 },
    { stockItem2: 'Fanta 500ml', sold: 33 },
    { stockItem2: 'Gold Dish Vegetable Curry Can', sold: 17 },
    { stockItem2: 'Imasi', sold: 30 },
    { stockItem2: 'Iwisa Pap 5kg', sold: 17 },
    { stockItem2: 'Milk 1l', sold: 39 },
    { stockItem2: 'Mixed Sweets 5s', sold: 49 },
    { stockItem2: 'Shampoo 1 litre', sold: 3 },
    { stockItem2: 'Soap Bar', sold: 12 },
    { stockItem2: 'Top Class Soy Mince', sold: 22 } ],
  [ { stockItem: 'Bananas - loose', sold: 47 },
    { stockItem: 'Bread', sold: 45 },
    { stockItem: 'Chakalaka Can', sold: 23 },
    { stockItem: 'Coke 500ml', sold: 54 },
    { stockItem: 'Cream Soda 500ml', sold: 22 },
    { stockItem: 'Fanta 500ml', sold: 33 },
    { stockItem: 'Gold Dish Vegetable Curry Can', sold: 17 },
    { stockItem: 'Imasi', sold: 30 },
    { stockItem: 'Iwisa Pap 5kg', sold: 17 },
    { stockItem: 'Milk 1l', sold: 39 },
    { stockItem: 'Mixed Sweets 5s', sold: 49 },
    { stockItem: 'Shampoo 1 litre', sold: 3 },
    { stockItem: 'Soap Bar', sold: 12 },
    { stockItem: 'Top Class Soy Mince', sold: 22 } ],
  [ { stockItem: 'Bananas - loose', sold: 47 },
    { stockItem: 'Bread', sold: 45 },
    { stockItem: 'Chakalaka Can', sold: 23 },
    { stockItem: 'Coke 500ml', sold: 54 },
    { stockItem: 'Cream Soda 500ml', sold: 22 },
    { stockItem: 'Fanta 500ml', sold: 33 },
    { stockItem: 'Gold Dish Vegetable Curry Can', sold: 17 },
    { stockItem: 'Imasi', sold: 30 },
    { stockItem: 'Iwisa Pap 5kg', sold: 17 },
    { stockItem: 'Milk 1l', sold: 39 },
    { stockItem: 'Mixed Sweets 5s', sold: 49 },
    { stockItem: 'Shampoo 1 litre', sold: 3 },
    { stockItem: 'Soap Bar', sold: 12 },
    { stockItem: 'Top Class Soy Mince', sold: 22 } ] ]);
  });
});
describe("mostPopularProduct",function(){
  it("should return the most popular product of each week",function(){
    var result = mostPopularProduct.mostPopularProduct();
    assert.equal(result,"");
  });
});
