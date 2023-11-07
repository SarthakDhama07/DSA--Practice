//JavaScript Program to Check if a String Starts With Another String

const prompt = require("prompt-sync")({sigint:true});

const string = prompt("Provide a String: ")
const toCheckString = prompt("Provide another String: ")
// program to check if a string starts with another string


if(string.startsWith(toCheckString)) {
    console.warn(`The string starts with ${toCheckString}.`);
}
else {
    console.warn(`The string does not starts with ${toCheckString}.`);
}

