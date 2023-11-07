/// Program to Find HCF or GCD
const prompt = require("prompt-sync")({sigint:true});
let HCF;
const num1 = parseInt(prompt("Enter The First Number: "));
const num2 = parseInt(prompt("Enter The Second Number: "));
for (let i = 0; i <= num1 && i <= num2; i++) {
    if(num1%i == 0 && num2%i==0){
        HCF = i;
    }
}
console.log(`HCF of ${num1} and ${num2} is ${HCF}`); 
