// JavaScript Program to Check if An Object is An Array

function checkObject(arr){
    const result = Array.isArray(arr);
    if (result) {
        console.log('it is a array')
    } else {
        console.log('it is not an Array')
    }
}
const array = [ 1,2,3,4,5, { }];
const array2 = { };
checkObject(array);
checkObject(array2);
console.log( typeof array2);
