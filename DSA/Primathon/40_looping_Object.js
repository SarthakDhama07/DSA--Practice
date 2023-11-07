//  Program to Loop Through an Object
const person = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    // greet: function() {
    //     console.log('Hello everyone.');
    // },
    // score: {
    //     maths: 90,
    //     science: 80
    // }
};

for (const key in person) {
    let value;
    value = person[key];
    console.log(key+ ' - ' + value);
    
}
