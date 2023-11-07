///Program to Reverse a String

const prompt = require("prompt-sync")({sigint:true});

const str = prompt("Provide a String: ")
const reverse = (`reverse of string is ${str.split('').reverse().join('')}`)
console.log(reverse);