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

//User interface logic
let pizza = new Pizza("small");
const cheese = new Toppings("Cheese", 1);
const pepperoni = new Toppings("Pepperoni", 2);
const bacon = new Toppings("Bacon", 2);
const chicken = new Toppings("Chicken", 2);
const onion = new Toppings("Onion", 1);
const peppers = new Toppings("Peppers", 1);
const pineapple = new Toppings("Pineapple", 5); //eww
const chilis = new Toppings("Chili Peppers", 1);
const mushrooms = new Toppings("Mushrooms", 1);
const sausage = new Toppings("Sausage", 2);

function displayPizzaDeets(pizzaToShow) {
  let toppingsList = $("ul#pizza");
  let htmlForPizzaInfo = "";
  Object.keys(pizzaToShow.toppings).forEach(function(key) {
    const pizzaStr = pizzaToShow.findTop(key);
    htmlForPizzaInfo += "<li id=" + key + ">" + pizzaStr.topping + "</li>"; 
  });
  toppingsList.html(htmlForPizzaInfo);
}



$(document).ready(function() {
  $("form#new-topping").submit(function(event) {
    event.preventDefault();
    let inputtedCustomTopName = $("input#new-custom-topping-name").val();
    let inputtedCustomTopCost = parseInt($("input#new-custom-topping-cost").val());
    $("input#new-custom-topping-name").val("");
    $("input#new-custom-topping-cost").val("");
    let customTop = new Toppings (inputtedCustomTopName,inputtedCustomTopCost);
    pizza.addTop(customTop);
    displayPizzaDeets(pizza);
  });
})


