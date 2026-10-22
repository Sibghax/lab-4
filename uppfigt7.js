// uppgift 6: this program calculates the sum of an array
//Sibgha Hayat, 2026
"use strict";

let numbers = [1,2,3,4,5,6,7];

function sumofnumbers (numbers){
    let sum = 0 
    for(let i = 0; i < numbers.length;i++){
         sum += numbers[i]
      

    }
   return sum 
}

console.log("summan är:" + sumofnumbers(numbers))