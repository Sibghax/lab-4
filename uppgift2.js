// Uppgift 2:This program prints out price of the apple, amount, total and total with moms. 
//Sibgha Hayat, 2026
"use strict";
let apple = 35  //declaring variables 
let amount = 10
let total = apple * amount 
let  includingMoms = (total * 0.25) + total // adding 0.25% of moms to the total


console.log("Apple price: " + apple + "kr") //printing 
console.log("Amount: " + amount + "st")
console.log("Total:" + total + "kr")
console.log("Total including moms: " + includingMoms + "kr")