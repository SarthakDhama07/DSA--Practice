//JavaScript Program to Insert Item in an Array

function Insertelement(){

    const array = ['you', 'will', 'learn', 'javascript'];
    let index = 3;
    let element = 'briyani';
    array.splice(index, 0, element);
    console.log(array);
}
Insertelement();
