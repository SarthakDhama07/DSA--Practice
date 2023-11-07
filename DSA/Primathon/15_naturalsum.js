//     Program to Find the Sum of Natural Numbers (Take input from users)

const prompt = require("prompt-sync")({sigint:true});
const num1 = parseInt(prompt("Enter the First Number: "))
const num2 = parseInt(prompt("Enter the Second Number: "))
if (num1===0 || num2===0) {
    console.log("Please provide Natural Numbers")
}else if(num1<0 || num2<0){
    console.log("Please provide Natural Numbers")
}

else{
    let sum = num1 + num2 
    console.log(`The sum of Two Natural Number is  ${sum}`);
}