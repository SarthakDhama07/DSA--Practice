const prompt = require("prompt-sync")({sigint:true});
const num = parseInt(prompt("Enter a Number:"));
const sqrt = Math.sqrt(num);
console.log(`The square root of ${num} is ${sqrt}`);