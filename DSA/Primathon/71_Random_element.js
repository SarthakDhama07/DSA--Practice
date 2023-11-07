// JavaScript Program to Get Random Item From an Array

function getRandomItem(arr){
    const randomIndex = Math.floor(Math.random() * Array.length);

    const item = arr[randomIndex];

    return item;
}
const Array = [1,'hello', 5,6,7];
const result = getRandomItem(Array);
console.log(result);