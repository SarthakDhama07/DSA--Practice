/// Program to Find ASCII Value of Character
// string.charCodeAt()
// string.codePointAt()  these are the two methods which are used to find ASCII Value of any character 
const prompt = require("prompt-sync")({sigint:true});
const char = prompt('Enter a character: ')
const result = char.charCodeAt(0);
console.log(result);

//  2nd approach
const string = prompt('Enter a character: ')
const output = string.codePointAt(0);
console.log(output);
