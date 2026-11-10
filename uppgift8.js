// uppgift 8: this program has created a function to read an object.
//Sibgha Hayat, 2026
"use strict";

let books = {
  //craeted an object
  title: "book",
  auther: "Jon",
  publishyear: 2002,
};

function favbook(book) {
  console.log("Tittle: " + book.title); //printing the values of the object
  console.log("auther: " + book.auther);
  console.log("publish: " + book.publishyear);
}

favbook(books); //running the function
