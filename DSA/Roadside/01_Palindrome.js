// question 1 :- Palindrome Number
// an integer is palindrome when it reads the same from forward and backward

// input x = 121  output true
// input x = 10  output false

// Method -1

 const isPalindrome = function(x){
    return x === +x.toString().split("").reverse().join("");
 };
 const result = isPalindrome(12);
 console.log(result);

 // method 2-
 const isPalindrome1 = function(x){
    return x< 0 ? false: (x === +x.toString().split("").reverse().join(""));
 };
 const result1 = isPalindrome1(121);
 console.log(result1);

