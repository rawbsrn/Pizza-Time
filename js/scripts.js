//Business Logic

function Pizza (size) {
  this.toppings = {};
  this.size = size;
  this.topId = 0;
  this.totalCost = 0;
  this.orderId = 0;
}

Pizza.prototype.assignTopId = function() {
  this.topId += 1;
  return this.topId;
};

Pizza.prototype.addTop = function(topping) {
  this.topId = this.assignTopId();
  this.toppings[this.topId] = topping;
};

Pizza.prototype.removeTop = function(top) {
  if (this.toppings[top] === undefined) {
    return false;
  }
  delete this.toppings[top];
  return true;
};

Pizza.prototype.findTop = function(topId) {
  if (this.toppings[topId] != undefined) {
    return this.toppings[topId];
  }
  return false;
};

Pizza.prototype.changeSize = function(size) {
  return this.size = size;
};

function Toppings(topping, cost){
  this.topping = topping;
  this.cost = cost;
}

Toppings.prototype.list = function() {
  return this.topping + " " + "Costs" + " " + this.cost + " " + "USD";
};

let pizza = new Pizza("small");
let cheese = new Toppings("cheese", 1);
let pep = new Toppings("Pepperoni", 2);