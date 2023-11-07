/////   Program to Calculate the Area of a Triangle

const prompt = require("prompt-sync")({sigint:true});
const lenght = parseInt(prompt("Enter the lenght of Triangle: "))
const breadth = parseInt(prompt("Enter the breadth of Triangle: "))
const area = lenght * breadth
console.log(`area of triangle is ${area}`);