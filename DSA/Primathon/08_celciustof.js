const prompt = require("prompt-sync")({sigint:true});
const celcius = parseInt(prompt("Enter Tempreature in Celcius: "))
const f = ((celcius * 9/5) + 32);

console.log(`${celcius} celcius has ${f} Farenheit Tempreature`);