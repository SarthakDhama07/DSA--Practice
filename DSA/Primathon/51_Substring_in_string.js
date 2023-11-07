// JavaScript Program to Check Whether a String Contains a Substring

const prompt = require("prompt-sync")({sigint:true});

const string = prompt("Provide a String: ")
const toCheckString = prompt("Provide another String: ")
// program to check if a string starts with another string


if(string.includes(toCheckString)) {
    console.warn(`${string} includes substring ${toCheckString}.`);
}
else {
    console.warn(`The ${string} does not include substring ${toCheckString}.`);
}
