// uppgift 9: this program 
//Sibgha Hayat, 2026
"use strict";


let personaldata = [
    {
    names : "Sofia",
    age : 14,
    city : "Malmö",
},
 {
    names : "lars",
    age : 24,
    city : "Stockhol"
},
 {
    names : "cissi",
    age : 25,
    city : "Kiruna"
}
]


function person(personaldata){
    for(let i=0; i < personaldata.length; i++){
        if (personaldata.age > 18){
            console.log("yes")
        } else
            console.log("no")
    }
}

person(personaldata)