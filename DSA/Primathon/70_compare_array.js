//JavaScript Program to Compare Elements of Two Arrays.


function CompareTwoArray(arr1, arr2){
    const result = JSON.stringify(arr1) == JSON.stringify(arr2)

    if (result) {
        console.log('The arrays have the same elements.')
    } else {
        console.log('The arrays do not have the same elements.')
    }
}
const array1 = [1, 3, 5, 8];
const array2 = [1, 3, 5, 8];

CompareTwoArray(array1, array2);