//  JavaScript Program to Guess a Random Number

const prompt = require("prompt-sync")({sigint:true});

function guessNumber(){
    const Random = Math.floor(Math.random()*10) + 1;
    const num = prompt("Guess a Number between 1 and 10 : ")
    if (num == Random) {
        console.log("You have guessed the correct Number");
    } else {
        console.log(`You have guessed the Wrong Number, the answer is ${Random}`);
    }
}
guessNumber();