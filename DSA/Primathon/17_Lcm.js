const prompt = require("prompt-sync")({sigint:true});
const x = parseInt(prompt("Enter the first Number: "))
const y = parseInt(prompt("Enter the Second Number: "))

/// higher number bw x and y will be stored in min 
let min = (x>y) ? x: y;

while(true){
    if(min%x == 0 && min%y == 0) {
        console.log(`The LCM of ${x} and ${y} is ${min}`)
        break;
    }
    min++;
}