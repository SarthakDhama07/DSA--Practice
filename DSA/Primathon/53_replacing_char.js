// JavaScript Program to Replace all Instances of a Character in a String

const prompt = require("prompt-sync")({sigint:true});

const string = prompt("Provide a String: ")
const replace1 = prompt("Provide character:  ")
const replacewith = prompt("Provide New character:  ")

const splitString = string.split(`${replace1}`);

const result = splitString.join(`${replacewith}`);

console.log(result);
