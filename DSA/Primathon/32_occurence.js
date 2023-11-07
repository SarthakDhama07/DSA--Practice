///   Check the Number of Occurrences of a Character in the String.

const prompt = require("prompt-sync")({sigint:true});


const str = prompt("Provide a valid String: ");
const occurence = prompt("Provide a Character which you want to calculate the occurence: ");
const length = str.length;

let count = str.split(occurence).length -1;
// let calculate = function(str){
//     for (let i = 0; i < length ; i++) {
//         if(i == occurence){
//             calculate++;
//         }
        
//     }
// }
console.log(count);