// uppgift 7: this program calculates the sum of an array
//Sibgha Hayat, 2026
"use strict";

let numbers = [1, 2, 3, 4, 5, 6, 7]; //craeted an array of numbers

function sumofnumbers(numbers) {
  let sum = 0; //declaring sum variable
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; //adding number from numbers to the sum, one by one
  }
  return sum;
}

console.log("summan är:" + sumofnumbers(numbers)); //printing the sum
