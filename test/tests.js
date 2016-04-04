var assert = require('assert');
var weeklySales = require('../weeklySales');
var mostPopularProduct = require('../mostPopularProduct');
var leastPopularProduct = require('../leastPopularProduct');
var mostPopularCategory = require('../mostPopularCategory');
var leastPopularCategory = require('../leastPopularCategory');
var mostProfitableProduct = require('../mostProfitableProduct');

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
    assert.equal(result,"week 1: Coke 500ml - 54\nweek 2: Coke 500ml - 98\nweek 3: Milk 1l - 30\nweek 4: Gold Dish Vegetable Curry Can - 63");
  });
});
describe("leastPopularProduct",function(){
  it("should return the least popular product of each week",function(){
    var result = leastPopularProduct.leastPopularProduct();
    assert.equal(result,"week 1: Shampoo 1 litre - 3\nweek 2: Heart Chocolates - 0\nweek 3: Shampoo 1 litre - 4\nweek 4: Top Class Soy Mince - 0");
  });
});
describe("mostPopularCategory",function(){
  it("should return the most popular category of each week",function(){
    var result = mostPopularCategory.mostPopularCategory();
    assert.deepEqual(result,"week 1: Sweets\nweek 2: Sweets\nweek 3: Dairy\nweek 4: Canned_Goods");
  });
});
describe("leastPopularCategory",function(){
  it("should return the least popular category of each week",function(){
    var result = leastPopularCategory.leastPopularCategory();
    assert.deepEqual(result,"week 1: Hygiene\nweek 2: Canned_Goods\nweek 3: Hygiene\nweek 4: Meat");
  });
});
describe("mostProfitableProduct",function(){
  it("should return the most profitable product of each week",function(){
    var result = mostProfitableProduct.mostProfitableProduct();
    assert.equal(result,"");
  });
});
