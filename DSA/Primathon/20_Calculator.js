//  Program to Make a Simple Calculator (Take inpute from users)
const prompt = require("prompt-sync")({sigint:true});

const num1 = parseInt(prompt("Enter The First Number: "));
const operator = prompt("Enter operator (either +, -, * or /): ");
const num2 = parseInt(prompt("Enter The Second Number: "));
let result;

if(operator == '+'){
    result = num1 + num2;
}else if(operator=='-'){
    result = num1 - num2;
}else if(operator == '*'){
    result = num1*num2;
}else{
    result = num1/num2
}
console.log(`${num1} ${operator} ${num2} = ${result}`);