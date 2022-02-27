# _Pizza Time_

#### By _Rob Sameh_

#### A Webpage page built using HTML and CSS, JavaScript, and JQuery

## Technologies Used

* HTML
* CSS
* JavaScript
* JQuery

## Description

A website designed to simulate ordering a pizza where you can even put in your own custom toppings!

## Setup/Installation Requirements

Be sure to clone this repo to your local machine by running the command `git clone https://github.com/rawbsrn/Pizza-Time` . After you do this you should be able to open the index.html file located in the portfolio-epicodus folder in the web browser of your choosing. 

You may need to install Node.js on your machine in order to get working, you can follow the instructions here for more information: https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js

## Tests

Describe: Pizza()

Test: "It should return a Pizza object with one property for size"
Code: let myPizza = new Pizza("large");
Expected Output: Pizza {size: "large" }

Describe: Pizza.prototype.addTop("topping")

Test: "It should return a Pizza object with an additional property for toppings and size"
Code: Pizza.addTop("onion")
Expected Output: Pizza { toppings: ={topping: 'Cheese', cost: 1}, size: "large"}

Describe: Pizza.prototype.removeTop("topping")

Test: "It should return a Pizza object without a specified property for topping"
Code: Pizza.removeTop("onion")
Expected Output: Pizza { toppings: ={}, size: "large"}

Describe: Pizza.prototype.changeSize("size")

Test: "It should return a Pizza object with a specified size
Code: Pizza.changeSize("medium")
Expected Output: Pizza { toppings: ={}, size: "medium"}

Describe: Pizza.prototype.costCalc()

Test: "It should return a number based on the number of toppings and size of the pizza
Code: Pizza.costCalc()
Expected Output: 16

Describe: Pizza.prototype.assignTopId()

Test: "It should return a number based on the number of the topId issued"
Code: Pizza.assignTopId()
Expected Output: 1

Describe: Pizza.prototype.findTop("topId")
Test: "It should return this.toppings[topId] if it is present in the object, or false if it is not
Code: Pizza.findTop(1)
Expected Output: Toppings {topping: 'Cheese', cost: 1}


Describe: Toppings()

Test:"It should return a Toppings object with one property for a topping and its cost
Code: let myTop = new Toppings("Cheese", 1);
Expected Output: Toppings {"Cheese" , 1}

## Known Bugs

* Please report any issues to Rob . Sameh @ gmail {dot} com

## License

 This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

Copyright (c) 2022 Sameh
