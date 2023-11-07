// JavaScript Program to Convert Objects to Strings/

const person = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

const string = new String(person);
const json = JSON.stringify(person);
console.log(string);
console.log(json);
console.log(typeof string);
console.log(typeof json);

