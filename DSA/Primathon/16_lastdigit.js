//   Program to Check if the Numbers Have Same Last Digit

const prompt = require("prompt-sync")({sigint:true});
const x = parseInt(prompt("Enter First Number: "))
const y = parseInt(prompt("Enter Second Number: "))
let x1= x%10
let y1= y%10
if(x1==y1){
    console.log(`${x} and ${y} has same last digit.`)
}else{
    console.log(`${x} and ${y} has Different last digit.`)
}
