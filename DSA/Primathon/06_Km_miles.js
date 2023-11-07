const prompt = require("prompt-sync")({sigint:true});
const km = parseInt(prompt("Provide Kilometers; "));

const miles = km * 0.621 
console.log(`${km} km has ${miles} miles.`);