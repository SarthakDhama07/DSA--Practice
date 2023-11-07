//// JavaScript Program to Merge Property of Two Objects

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

const subject = {
    maths: 90,
    science: 80
}
const Merge = {...person, ...subject}
console.log(Merge);