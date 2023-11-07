//  JavaScript Program to Empty an Array.

function Emptyarray(){
    arr = []
    return arr;
}
const array = [1,2,3,4];
console.log(array);

const result = Emptyarray(array);
console.log(result);


//Empty Array by Setting Length 0

// program to empty an array

function emptyArray(arr) {

    // setting array length to 0
    arr.length = 0;
    
    return arr;
}

const array1 = [1, 2 ,3];
console.log(array1);

// call the function
const result1 = emptyArray(array);
console.log(result1);