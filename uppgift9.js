// uppgift 9: this program uses fuction to print the information from an object
//Sibgha Hayat, 2026
"use strict";

let personaldata = [
  // creating an array of values inside of an object
  {
    names: "Sofia",
    age: 14,
    city: "Malmö",
  },
  {
    names: "lars",
    age: 24,
    city: "Stockhol",
  },
  {
    names: "cissi",
    age: 25,
    city: "Kiruna",
  },
];

function printperson(person) {
    //going through the object one by one
    if (person.age >= 18) {
      //creating a condition to devide the people depending on the age into two groups myndig and inte myndig
      console.log(person.names + " bor i " + person.city + " och är myndig", ); 
    } else
      console.log(
        person.names +
          " bor i " +
          person.city +
          " och är inte myndig",
      );
  }

// Loopen går igenom arrayen och skickar en person i taget till funktionen
 for (let i = 0; i < personaldata.length; i++) {
printperson(personaldata[i]);
 }