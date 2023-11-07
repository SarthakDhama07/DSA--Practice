////     Program to Count the Number of Vowels in a String.

const prompt = require("prompt-sync")({sigint:true});

const str = prompt("Provide a valid String: ");
let count = str.match(/[aeiou]/gi).length;


    
console.log(count);

