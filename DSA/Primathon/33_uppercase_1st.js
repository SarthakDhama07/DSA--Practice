//Program to Convert the First Letter of a String into UpperCase.

const prompt = require("prompt-sync")({sigint:true});


const str = prompt("Provide a valid String: ");

const UpperCase = str.charAt(0).toUpperCase() + str.slice(1,);
console.log(UpperCase);