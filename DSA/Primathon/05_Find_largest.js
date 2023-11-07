const prompt = require("prompt-sync")({sigint:true});
const number1 = parseInt(prompt("Enter First Number: "))
const number2 = parseInt(prompt("Enter Second Number: "))
const number3 = parseInt(prompt("Enter Third Number: "))

if (number1>number2 && number1> number3) {
    console.log(`${number1} is Greatest`)
}else if(number2>number1 && number2 > number3){
    console.log(`${number2} is Greatest`)
}else{
    console.log(`${number3} is Greatest`)
}