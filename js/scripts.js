//Business Logic

function Pizza () {
  this.toppings = {};
  this.size = "small";
  this.currentId = 0;
  this.totalCost = 0;
}

Pizza.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Pizza.prototype.addTop = function(top) {
  this.toppings[top.id] = top;
};

function Toppings(topping, cost){
  this.topping = topping;
  this.cost = cost;
}

let pizza = new Pizza();
let cheese = new Toppings("cheese", 1);
let pep = new Toppings("Pepperoni", 2);