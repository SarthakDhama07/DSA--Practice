//   Program to Find the Factorial of a Number

const prompt = require("prompt-sync")({sigint:true});
const num = parseInt(prompt("Enter a number: "))
if(num < 0) {
    console.log("Error! can't print factorial");

}else if(num === 0){
    console.log("Factorial of 0 is 1");
}else{
    let fact = 1
    for (let index = 1; index <= num; index++) {
        fact *= index
        
    }
    console.log(`The Factorial of ${num} is ${fact} `);
}