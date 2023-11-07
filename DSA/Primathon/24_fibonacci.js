// Program to Display Fibonacci Sequence Using Recursion

const prompt = require("prompt-sync")({sigint:true});
const num = parseInt(prompt("Enter The Number: ")); 
const fib = function(num){
    if (num<=1)return num;
    return fib(num - 1) + fib(num - 2);
        
}
console.log(fib(num));