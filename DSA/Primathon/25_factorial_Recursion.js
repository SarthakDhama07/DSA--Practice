/// Program to Find Factorial of Number Using Recursion

const prompt = require("prompt-sync")({sigint:true});
const num = parseInt(prompt("Enter a Number: "))
const factorial = function(num){
    for (let i = 1; i <= num; i++) {
        if(num%i==0){
            console.log(i);
        }
        
    }
}
console.log(`the Factorial of ${num} is ${factorial(num)}`);


//   +++  SECOND APPROACH   +++

function fact(x){
    if(x==0){
        return 1
    }else{
        return x* fact(x-1);
    }
}

const num1 = parseInt(prompt("Enter a Number: "))
if(num1>=0) {
    const result = fact(num);
    console.log(`The factorial of ${num1} is ${result}`)
}else{
    console.log('Enter positive number')
}

