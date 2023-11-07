//Program to check number is odd or even


// program to check if the number is even or odd
// take input from the user
const prompt=require("prompt-sync")({sigint:true});
const number = prompt("Enter a number: ");


if (number%2 === 0) {
    
    console.log("Number is even");
    
}else{
    console.log("Number is Odd");
}