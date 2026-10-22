// uppgift 8: this program has created a function to read an object. 
//Sibgha Hayat, 2026
"use strict";


let books = {
    title : "book",
    auther : "Jon", 
    publishyear : 2002,
}


function favbook (book){
     console.log("Tittle: " + book.title)
     console.log("auther: " + book.auther)
     console.log("publish: " + book.publishyear)
}

favbook(books)