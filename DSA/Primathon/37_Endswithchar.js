//   Check Whether a String Starts and Ends With Certain Characters// 

const prompt = require("prompt-sync")({sigint:true});
const str = prompt("Provide a String: ");
 let start = prompt("Check Whether a String Starts With: ");
 let end = prompt("Check Whether a String Ends With: ");

function check(){
    if(str.charAt(0) == `${start}` && str.charAt(-1) == `${end}`){
        return true;
    }else{
        return false;
    }
}
console.log(check(str));