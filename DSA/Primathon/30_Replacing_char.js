/// Program to Replace Characters of a String

const prompt = require("prompt-sync")({sigint:true});
const char = prompt("Provide any Word: ");
 let change1 = prompt("Provide the Word you want to replace: ");
 let change2 = prompt("Provide the new character: ");
const change = char.replace(change1, change2);
console.log(change);