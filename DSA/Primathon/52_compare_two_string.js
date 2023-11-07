//JavaScript Program to Compare Two Strings

const prompt = require("prompt-sync")({sigint:true});

const string = prompt("Provide a String: ")
const toCheckString = prompt("Provide another String: ")
// program to check if a string starts with another string


if(string === toCheckString) {
    console.warn(`${string} equals to ${toCheckString}.`);
}
else {
    console.warn(`The ${string} does not equal to ${toCheckString}.`);
}