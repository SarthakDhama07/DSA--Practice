/// Sum of natural number using recursion

const prompt = require("prompt-sync")({sigint:true});

function sum(num) {
    if (num > 0) {
        return num + sum(num - 1);
    } else {
        return num 
    }
}
const num1 = parseInt(prompt("Enter The Natural Number: "));
const result = sum(num1);
console.log(`the sum is ${result}`)