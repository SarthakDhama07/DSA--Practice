const prompt = require("prompt-sync")({sigint:true});

// program to convert decimal to binary

// take input
const number = parseInt(prompt('Enter a decimal number: '));

// convert to binary
const result = number.toString(2);

console.log('Binary:' + ' ' + result);

// 2nd approach

function convertToBinary(x){
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        console.log(
            `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
        );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}

// take input
let number2 = prompt('Enter a decimal number: ');

convertToBinary(number2);
