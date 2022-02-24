Describe: Pizza()

Test: "It should return a Pizza object with one property for size"
Code: let myPizza = new Pizza("large");
Expected Output: Pizza {size: "large" }

Describe: Pizza.prototype.addTop("topping")

Test: "It should return a Pizza object with an additional property for toppings and size"
Code: Pizza.addTop("onion")
Expected Output: Pizza { toppings: =["cheese", "onion"], size: "large"}

Describe: Pizza.prototype.removeTop("topping")

Test: "It should return a Pizza object without a specified property for topping"
Code: Pizza.addTop("onion")
Expected Output: Pizza { toppings: =["cheese"], size: "large"}

Describe: Pizza.prototype.changeSize("size")

Test: "It should return a Pizza object with a specified size
Code: Pizza.changeSize("medium")
Expected Output: Pizza { toppings: =["cheese"], size: "medium"}

Describe: Pizza.prototype.cost()

Test: "It should return a number based on the number of toppings and size of the pizza
Code: Pizza.cost()
Expected Output: 16

Describe: Pizza.prototype.assignId()

Test: "It should return a number based on the number of the currentId issued"
Code: Pizza.assignId()
Expected Output: 1

Describe:Toppings()
Test:"It should return a Toppings object with one property for a topping and its cost
Code: let myTop = new Toppings("Cheese", 1);
Expected Output: Toppings {"Cheese" , 1}

