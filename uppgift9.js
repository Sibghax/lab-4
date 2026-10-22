// uppgift 9: this program uses fuction to print the information from an object
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
        if (personaldata[i].age > 18){
            console.log(personaldata[i].names + " bor i " + personaldata[i].city + " och är myndig")
        } else
            console.log(personaldata[i].names + " bor i " + personaldata[i].city + " och är inte myndig")
    }
}

person(personaldata)
