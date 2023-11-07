// JavaScript Program to Remove Duplicates From Array

function RemoveDuplicates(){
    const array = [1,2,2,3,3,4,5,6,66,7,7];
    let unique = [...new Set(array)];
    console.log(unique);
}
RemoveDuplicates();

//A Set is a collection of unique values.