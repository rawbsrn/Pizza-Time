//Business Logic

function Pizza (size) {
  this.toppings = {};
  this.size = size;
  this.topId = 0;
  this.totalCost = 0;
}

Pizza.prototype.assignTopId = function() {
  this.topId += 1;
  return this.topId;
};

Pizza.prototype.addTop = function(topping) {
  this.topId = this.assignTopId();
  this.toppings[topping.id] = topping;
};

Pizza.prototype.removeTop = function(top) {
  if (this.toppings[top.id] === undefined) {
    return false;
  }
  delete this.toppings[top.id];
  return true;
}

Pizza.prototype.findTop = function(topId) {
  if (this.toppings[topId] != undefined) {
    return this.toppings[topId];
  }
  return false;
}

function Toppings(topping, cost){
  this.topping = topping;
  this.cost = cost;
}

let pizza = new Pizza("small");
let cheese = new Toppings("cheese", 1);
let pep = new Toppings("Pepperoni", 2);