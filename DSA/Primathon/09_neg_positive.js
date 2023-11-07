//  Program to Check if a number is Positive, Negative, or Zero

const prompt = require("prompt-sync")({sigint:true});
const number = parseInt(prompt("Enter a Number: ")) 
if (number>0) {
    console.log("Number is Postive")
    
}else if(number<0){
    console.log("Number is Negative")
}else{
    console.log("Number is 0")
}
