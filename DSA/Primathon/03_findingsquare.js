//Program to Find the Square Root of given Number

const prompt = require("prompt-sync")({sigint:true});
const number = parseInt(prompt("Enter a Number: "))

let square = number**2;
console.log(`the square root of ${number} is ${square}`);