// JavaScript Program to Append an Object to An Array

function appendObject(){
    const array = [1,2,3,4];
    let index = 4
    const object= {
        name: 'Sarthak Dhama',
        profession: 'software developer',
    }
    array.push(object);
    console.log(array);


}
appendObject();