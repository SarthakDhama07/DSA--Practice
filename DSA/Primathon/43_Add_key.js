//    JavaScript Program to Add Key/Value Pair to an Object

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

person['height'] = 5.4;
person['Profession'] = 'Developer';

console.log(person);
