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

Pizza.prototype.costCalc = function() {
  switch (this.size) {
    case ("small"):
      this.totalCost = 5;
      break;
    case ("medium"):
      this.totalCost = 8;
      break;
    case ("large"):
      this.totalCost = 10;
      break;
    default:
      console.log("your pizza is too big!")
  }

  for (let i=1; i <= this.topId; i++) {
    this.totalCost+=this.toppings[i].cost;
  }
  return this.totalCost;
}

function Toppings(topping, cost){
  this.topping = topping;
  this.cost = cost;
}

Toppings.prototype.list = function() {
  return this.topping + " " + "Costs" + " " + this.cost + " " + "USD";
};

let pizza = new Pizza("small");
let cheese = new Toppings("Cheese", 1);
let pep = new Toppings("Pepperoni", 3);
// pizza.toppings['2'].cost