// carry out the first pair from array whose sum is 0 

const array = [-5,-4,-3,-2,0,4,6,8];

function getSumZero(array){
    for(Number of array){
        for (let index = 0; index < array.length; index++) {
           if(Number + array[index]=== 0){
            return[Number, array[index]];
           }
            
        }
    }
}
const result = getSumZero(array);
console.log(result);

/// in this method the time complexity is 0n*2

// second method

const array2 = [-5,-4,-3,-2,0,4,6,8];
function findsum0(array2){
    let left = 0;
let right = array2.length-1

while(left < right){
    sum = array2[left]+array2[right];
    if(sum === 0){
        return[array2[left], array2[right]];
    }else if(sum>0){
        right--;
    }else{
        left++;
    }
}
}
const result2 = findsum0(array2);
console.log(result2);
