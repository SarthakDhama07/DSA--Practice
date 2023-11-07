// Program to Sort Words in Alphabetical Order
const prompt = require("prompt-sync")({sigint:true});

function alphabeticalSort(str){
    const Sort = str.split('').sort().join('');
    console.log(Sort);
}
const str = prompt("Provide a String: ")
alphabeticalSort(str);
