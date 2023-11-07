/////// Program to Check Armstrong Number

const prompt = require("prompt-sync")({sigint:true});
let  sum = 0;
const number = parseInt(prompt("Please Enter a Three digit Number: "))

let temp = number;
while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10);
} 
if(sum==number) {
    console.log(`${number} is Armstrong Number`)
}else{
    console.log(`${number} is not an Armstrong Number`)
}