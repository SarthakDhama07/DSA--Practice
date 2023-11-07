/// JavaScript Program to Replace All Occurrences of a String.

const prompt = require("prompt-sync")({sigint:true});

const str = prompt("Provide a String: ")

const change = prompt("New string: ")
const Occurrences = str.replace(str, change);
console.log(Occurrences);
