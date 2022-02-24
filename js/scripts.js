//Business Logic

function Pizza () {
  this.toppings = {};
  this.size = "small";
  this.currentId = 0;
  this.cost = 0;
}

Pizza.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}