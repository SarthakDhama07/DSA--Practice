/// Program to Check Whether a String is Palindrome or Not.
const prompt = require("prompt-sync")({sigint:true});

function chechPalindrome(string){

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
const string = prompt("Provide a String: ")
const result = chechPalindrome(string)
console.log(result);


// 2nd approach using reverse 
function palindrome(str){
    if(str === str.split('').reverse().join('')){
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }

}

const str = prompt("Provide a String: ")
palindrome(str);
