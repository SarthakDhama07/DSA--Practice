// in this problem we have a array in which we have to carry out the largest sum of consecutive  number. and count of number we have to provide.

function findLargest(array, num){
    if(num > array){
        throw new Error("Num is greater than array")

    }else{
        let max = 0;
        for (let i = 0; i < array.length -num + 1; i++) {
            let temp =0;
            for (let j = 0; j < num; j++) {
                console.log("i"+i,"j"+j)
                temp+=array[i+j];
                
            }
            if (temp > max) {
                max = temp;
            }
            
        }
        return max;
    }
}
const result = findLargest([1,2,3,4,3,5,4,6,7,8],3);
console.log(result);