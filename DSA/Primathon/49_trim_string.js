// JavaScript Program to Trim a String

const prompt = require("prompt-sync")({sigint:true});

const string = prompt("Provide a String: ")
const trim = string.trim()
console.log(trim);