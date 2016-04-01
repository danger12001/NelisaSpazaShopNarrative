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
  week2:
   [ { stockItem2: 'Bananas - loose', sold: 14 },
     { stockItem2: 'Bread', sold: 14 },
     { stockItem2: 'Chakalaka Can', sold: 0 },
     { stockItem2: 'Coke 500ml', sold: 98 },
     { stockItem2: 'Cream Soda 500ml', sold: 7 },
     { stockItem2: 'Fanta 500ml', sold: 0 },
     { stockItem2: 'Gold Dish Vegetable Curry Can', sold: 0 },
     { stockItem2: 'Heart Chocolates', sold: 0 },
     { stockItem2: 'Imasi', sold: 28 },
     { stockItem2: 'Iwisa Pap 5kg', sold: 7 },
     { stockItem2: 'Milk 1l', sold: 21 },
     { stockItem2: 'Mixed Sweets 5s', sold: 21 },
     { stockItem2: 'Rose (plastic)', sold: 14 },
     { stockItem2: 'Shampoo 1 litre', sold: 7 },
     { stockItem2: 'Soap Bar', sold: 7 },
     { stockItem2: 'Top Class Soy Mince', sold: 21 } ],
  week3:
   [ { stockItem: 'Bananas - loose', sold: 17 },
     { stockItem: 'Bread', sold: 24 },
     { stockItem: 'Chakalaka Can', sold: 17 },
     { stockItem: 'Coke 500ml', sold: 18 },
     { stockItem: 'Cream Soda 500ml', sold: 12 },
     { stockItem: 'Fanta 500ml', sold: 14 },
     { stockItem: 'Gold Dish Vegetable Curry Can', sold: 8 },
     { stockItem: 'Imasi', sold: 25 },
     { stockItem: 'Iwisa Pap 5kg', sold: 4 },
     { stockItem: 'Milk 1l', sold: 30 },
     { stockItem: 'Mixed Sweets 5s', sold: 29 },
     { stockItem: 'Shampoo 1 litre', sold: 4 },
     { stockItem: 'Soap Bar', sold: 8 },
     { stockItem: 'Top Class Soy Mince', sold: 12 } ],
  week4:
   [ { stockItem: 'Apples - loose', sold: 56 },
     { stockItem: 'Bananas - loose', sold: 35 },
     { stockItem: 'Bread', sold: 35 },
     { stockItem: 'Chakalaka Can', sold: 21 },
     { stockItem: 'Coke 500ml', sold: 21 },
     { stockItem: 'Cream Soda 500ml', sold: 0 },
     { stockItem: 'Fanta 500ml', sold: 7 },
     { stockItem: 'Gold Dish Vegetable Curry Can', sold: 7 },
     { stockItem: 'Gold Dish Vegetable Curry Can', sold: 63 },
     { stockItem: 'Imasi', sold: 42 },
     { stockItem: 'Iwisa Pap 5kg', sold: 21 },
     { stockItem: 'Milk 1l', sold: 56 },
     { stockItem: 'Mixed Sweets 5s', sold: 21 },
     { stockItem: 'Shampoo 1 litre', sold: 0 },
     { stockItem: 'Soap Bar', sold: 7 },
     { stockItem: 'Top Class Soy Mince', sold: 0 },
     { stockItem: 'Top Class Soy Mince', sold: 63 } ] }
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
    assert.equal(result,"week 1: Shampoo 1 litre - 3\nweek 2: Gold Dish Vegetable Curry Can - 0\nweek 3: Shampoo 1 litre - 4\nweek 4: Top Class Soy Mince - 0");
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
