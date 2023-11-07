/// +++ Program to carry out Factors of an given number

const prompt = require("prompt-sync")({sigint:true});
const num = parseInt(prompt("Enter a Number: "))
console.log(`the factorial of ${num} is :`);
for (let index = 1; index <= num; index++) {
    if (num%index==0) {
        console.log(index)
    }
    
}