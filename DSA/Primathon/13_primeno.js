// Program to Print All Prime Numbers in an Interval

const prompt = require("prompt-sync")({sigint:true});
const start = parseInt(prompt("Enter the Start Number: "))
const End = parseInt(prompt("Enter the End Number: "))

for (let index = start; index < End; index++) {
    if(index>1){
        let isPrime =true;
        for (let i = 2; i < index; i++) {
            if(index%i===0){
                isPrime= false;
                break;
            }
        }
        if(isPrime==true){
            console.log(index)
        }
    }
    
}