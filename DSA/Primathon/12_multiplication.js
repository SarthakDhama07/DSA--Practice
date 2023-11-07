//    Program to Display the Multiplication Table

const prompt = require("prompt-sync")({sigint:true});
const table = parseInt(prompt("Enter a number: "))

for (let index = 1; index < 11; index++) {
    const mult = table * index 
    console.log(`${table} * ${index} = ${mult}`)
}


