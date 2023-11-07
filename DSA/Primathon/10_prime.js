///   Program to Check Prime Number
const prompt = require("prompt-sync")({sigint:true});
const number = parseInt(prompt("Enter a Number: "))
let isPrime = true;

if (number === 1) {
    console.log("1 is a nota prime nor a composite Number")
    
}
else if(number > 1){
    for (let index = 2; index < number; index++) {
        if (number % index === 0) {
            isPrime = false;
            break
        }
         
         
     }
     if(isPrime){
        console.log(`${number} is a prime number`);
    }else{
        console.log(`${number} is not a prime number`)
    }
    
}

else{
    console.log(`${number} is not a prime number`)
}