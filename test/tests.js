var assert = require('assert');
var weeklySales = require('../weeklySales');
var mostPopularProduct = require('../mostPopularProduct');
var leastPopularProduct = require('../leastPopularProduct');
var mostPopularCategory = require('../mostPopularCategory');
var leastPopularCategory = require('../leastPopularCategory');
var mostProfitableProduct = require('../mostProfitableProduct');
var leastProfitableProduct = require('../leastProfitableProduct');

describe("weeklySales",function(){
  it("should return a map of the sales for the month",function(){
    var result = weeklySales.weeklySales();
    assert.deepEqual(result,{ week1:
   [ { stockItem: 'Bananas - loose', sold: 47,income: 2 },
     { stockItem: 'Bread', sold: 45,income: 12},
     { stockItem: 'Chakalaka Can', sold: 23,income: 10},
     { stockItem: 'Coke 500ml', sold: 54, income: 6.5},
     { stockItem: 'Cream Soda 500ml', sold: 22,income: 7.5},
     { stockItem: 'Fanta 500ml', sold: 33, income: 6.5 },
     { stockItem: 'Gold Dish Vegetable Curry Can', sold: 17, income: 9 },
     { stockItem: 'Imasi', sold: 30, income: 25 },
     { stockItem: 'Iwisa Pap 5kg', sold: 17, income: 30 },
     { stockItem: 'Milk 1l', sold: 39, income: 10 },
     { stockItem: 'Mixed Sweets 5s', sold: 49, income: 3 },
     { stockItem: 'Shampoo 1 litre', sold: 3, income: 30 },
     { stockItem: 'Soap Bar', sold: 12, income: 6 },
     { stockItem: 'Top Class Soy Mince', sold: 22, income: 12 } ],
  week2:
   [ { stockItem2: 'Bananas - loose', sold: 14, income: 2 },
     { stockItem2: 'Bread', sold: 14, income: 12 },
     { stockItem2: 'Chakalaka Can', sold: 0, income: 10 },
     { stockItem2: 'Coke 500ml', sold: 98, income: 6.5 },
     { stockItem2: 'Cream Soda 500ml', sold: 7, income: 7.5 },
     { stockItem2: 'Fanta 500ml', sold: 0, income: 6.5 },
     { stockItem2: 'Gold Dish Vegetable Curry Can', sold: 0, income: 9 },
     { stockItem2: 'Heart Chocolates', sold: 0, income: 35 },
     { stockItem2: 'Imasi', sold: 28, income: 25 },
     { stockItem2: 'Iwisa Pap 5kg', sold: 7, income: 30 },
     { stockItem2: 'Milk 1l', sold: 21, income: 10 },
     { stockItem2: 'Mixed Sweets 5s', sold: 21, income: 3 },
     { stockItem2: 'Shampoo 1 litre', sold: 0,income: 30 },
     { stockItem2: 'Soap Bar', sold: 0, income: 6 },
     { stockItem2: 'Top Class Soy Mince', sold: 14, income: 12 },
     { stockItem2: 'Valentine Cards', sold: 42, income: 4}],
  week3:
   [ { stockItem: 'Bananas - loose', sold: 17,income: 2 },
     { stockItem: 'Bread', sold: 24, income: 12 },
     { stockItem: 'Chakalaka Can', sold: 17, income: 10 },
     { stockItem: 'Coke 500ml', sold: 18, income: 6.5 },
     { stockItem: 'Cream Soda 500ml', sold: 12, income: 7.5 },
     { stockItem: 'Fanta 500ml', sold: 14, income: 6.5 },
     { stockItem: 'Gold Dish Vegetable Curry Can', sold: 8, income: 9 },
     { stockItem: 'Imasi', sold: 25, income: 25 },
     { stockItem: 'Iwisa Pap 5kg', sold: 4, income: 30 },
     { stockItem: 'Milk 1l', sold: 30, income: 10 },
     { stockItem: 'Mixed Sweets 5s', sold: 29, income: 2 },
     { stockItem: 'Shampoo 1 litre', sold: 4, income: 30 },
     { stockItem: 'Soap Bar', sold: 8, income: 6 },
     { stockItem: 'Top Class Soy Mince', sold: 12, income: 12 } ],
  week4:
   [ { stockItem: 'Apples - loose', sold: 56, income: 2 },
     { stockItem: 'Bananas - loose', sold: 35, income: 2 },
     { stockItem: 'Bread', sold: 35, income: 12 },
     { stockItem: 'Chakalaka Can', sold: 21, income: 10 },
     { stockItem: 'Coke 500ml', sold: 21, income: 6.5 },
     { stockItem: 'Cream Soda 500ml', sold: 0, income: 7.5 },
     { stockItem: 'Fanta 500ml', sold: 7, income: 6.5 },
     { stockItem: 'Gold Dish Vegetable Curry Can', sold: 7, income: 9 },
     { stockItem: 'Gold Dish Vegetable Curry Can', sold: 63, income: 9 },
     { stockItem: 'Imasi', sold: 42, income: 25 },
     { stockItem: 'Iwisa Pap 5kg', sold: 21, income: 30 },
     { stockItem: 'Milk 1l', sold: 56, income: 10 },
     { stockItem: 'Mixed Sweets 5s', sold: 21, income: 3 },
     { stockItem: 'Shampoo 1 litre', sold: 0, income: 30 },
     { stockItem: 'Soap Bar', sold: 7, income: 6 },
     { stockItem: 'Top Class Soy Mince', sold: 0, income: 12 },
     { stockItem: 'Top Class Soy Mince', sold: 63, income: 12 } ] }
);
  });
});
describe("mostPopularProduct",function(){
  it("should return the most popular product of each week",function(){
    var result = mostPopularProduct.mostPopularProduct();
    assert.deepEqual(result,{"week1":"Coke 500ml","week2":"Coke 500ml","week3":"Milk 1l","week4":"Gold Dish Vegetable Curry Can"});
  });
});
describe("leastPopularProduct",function(){
  it("should return the least popular product of each week",function(){
    var result = leastPopularProduct.leastPopularProduct();
    assert.deepEqual(result,{"week1":"Shampoo 1 litre","week2":"Heart Chocolates","week3":"Shampoo 1 litre","week4":"Top Class Soy Mince"});
  });
});
describe("mostPopularCategory",function(){
  it("should return the most popular category of each week",function(){
    var result = mostPopularCategory.mostPopularCategory();
    assert.deepEqual(result,{"week1":"Sweets","week2":"Sweets","week3":"Dairy","week4":"Canned_Goods"});
  });
});
describe("leastPopularCategory",function(){
  it("should return the least popular category of each week",function(){
    var result = leastPopularCategory.leastPopularCategory();
    assert.deepEqual(result,{"week1":"Hygiene","week2":"Canned_Goods","week3":"Hygiene","week4":"Meat"});
  });
});
describe("mostProfitableProduct",function(){
  it("should return the most profitable product of each week",function(){
    var result = mostProfitableProduct.mostProfitableProduct();
    assert.deepEqual(result,{"week1":"Imasi","week2":"Imasi","week3":"Imasi","week4":"Imasi"});
  });
});
describe("leastProfitableProduct",function(){
  it("should return the least profitable product of each week",function(){
    var result = leastProfitableProduct.leastProfitableProduct();
    assert.deepEqual(result,{"week1":"Mixed Sweets 5s","week2":"Mixed Sweets 5s","week3":"Mixed Sweets 5s","week4":"Mixed Sweets 5s"});
  });
});
