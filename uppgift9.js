// uppgift 9: this program uses fuction to print the information from an object
//Sibgha Hayat, 2026
"use strict";


let personaldata = [ // creating an array of values inside of an object
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
    for(let i=0; i < personaldata.length; i++){  //going through the object one by one
        if (personaldata[i].age >= 18){ //creating a condition to devide the people depending on the age into two groups myndig and inte myndig
            console.log(personaldata[i].names + " bor i " + personaldata[i].city + " och är myndig") //printing out name, city and which group they belong. 
        } else
            console.log(personaldata[i].names + " bor i " + personaldata[i].city + " och är inte myndig")
    }
}

person(personaldata) // printing the function 
