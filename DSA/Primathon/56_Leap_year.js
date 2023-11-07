/// JavaScript Program to Check Leap Year
const prompt = require("prompt-sync")({sigint:true});

function checkleapYear(year){
    if((0==year%4) && (0!= year%100) || (0 == year%400)){
        console.log(`${year} is a leap year`)
    }else{
        console.log(`${year} is not a leap year`);
    }

} 
const year = prompt("enter a year: ");
checkleapYear(year);