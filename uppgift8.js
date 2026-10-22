// uppgift 8: this program has created a function to read an object. 
//Sibgha Hayat, 2026
"use strict";


let books = {
    title : "book",
    auther : "Jon", 
    publishyear : "2002",
}


function favbook (para){
     console.log("Tittle: " + para.title)
     console.log("auther: " + para.auther)
     console.log("publish: " + para.publishyear)
}

favbook(books)