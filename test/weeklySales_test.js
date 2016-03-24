var assert = require('assert');
var weeklySales1 = require('../weeklySales1');
var weeklySales2 = require('../weeklySales2');
var weeklySales3 = require('../weeklySales3');
var weeklySales4 = require('../weeklySales4');

describe("weeklySales1",function(){
  it("should return a map of the sales for week 1",function(){
    var result = weeklySales1.weeklySales1();
    assert.deepEqual(result,[
  { stockItem: 'Bananas - loose', sold: 47 },
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
  { stockItem: 'Top Class Soy Mince', sold: 22 } ]);
  });
});
describe("weeklySales2",function(){
  it("should return a map of the sales for week 2",function(){
    var result = weeklySales2.weeklySales2();
    assert.deepEqual(result,[ { stockItem: 'Bananas - loose', sold: 14 },
  { stockItem: 'Bread', sold: 14 },
  { stockItem: 'Chakalaka Can', sold: 0 },
  { stockItem: 'Coke 500ml', sold: 98 },
  { stockItem: 'Cream Soda 500ml', sold: 7 },
  { stockItem: 'Fanta 500ml', sold: 0 },
  { stockItem: 'Gold Dish Vegetable Curry Can', sold: 0 },
  { stockItem: 'Heart Chocolates', sold: 0 },
  { stockItem: 'Imasi', sold: 28 },
  { stockItem: 'Iwisa Pap 5kg', sold: 7 },
  { stockItem: 'Milk 1l', sold: 21 },
  { stockItem: 'Mixed Sweets 5s', sold: 21 },
  { stockItem: 'Rose (plastic)', sold: 14 },
  { stockItem: 'Shampoo 1 litre', sold: 7 },
  { stockItem: 'Soap Bar', sold: 7 },
  { stockItem: 'Top Class Soy Mince', sold: 21 } ]);
  });
});
describe("weeklySales3",function(){
  it("should return a map of the sales for week 3",function(){
    var result = weeklySales3.weeklySales3();
    assert.deepEqual(result,[ { stockItem: 'Bananas - loose', sold: 17 },
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
  { stockItem: 'Top Class Soy Mince', sold: 12 } ]
);
  });
});
describe("weeklySales4",function(){
  it("should return a map of the sales for week 4",function(){
    var result = weeklySales4.weeklySales4();
    assert.deepEqual(result,[ { stockItem: 'Apples - loose', sold: 56 },
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
  { stockItem: 'Top Class Soy Mince', sold: 63 } ]
);
  });
});
