const prompt = require("prompt-sync")({sigint:true});
const Number1 = parseInt(prompt("Enter  First Number:"))

const Number2 = parseInt(prompt("Enter  Second Number:"))

 let sum = Number1 + Number2
console.log(`the sum of ${Number1} and ${Number2} is ${sum}`)

