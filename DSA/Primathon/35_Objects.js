//   Using object literal

// program to create JavaScript object using object literal
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

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);



///Create an Object using Instance of Object Directly

const objectName = new Object();

// program to create JavaScript object using instance of an object
const person2 = new Object ( { 
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
});

console.log(typeof person2); // object

// accessing the object value
console.log(person2.name);
console.log(person2.hobbies[0]);
person.greet();
console.log(person2.score.maths);

///   Create an object using Constructor Function.'


// program to create JavaScript object using instance of an object

function Person() {
    this.name = 'John',
    this.age = 20,
    this.hobbies = ['reading', 'games', 'coding'],
    this.greet = function() {
        console.log('Hello everyone.');
    },
    this.score = {
        maths: 90,
        science: 80
    }

}

const person3 = new Person();

console.log(typeof person3); // object

// accessing the object value
console.log(person3.name);
console.log(person3.hobbies[0]);
person.greet();
console.log(person3.score.maths);

