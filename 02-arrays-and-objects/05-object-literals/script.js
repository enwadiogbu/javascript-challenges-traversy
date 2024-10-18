let x;

const person = {
    name: 'John Smith',
    age: 45,
    location: 'Phoenix, Arizona',
    isAdmin: true,
    address: {
        street: '123 Main Street',
        city: 'Boston',
        state: 'MA'
    },
    hobbies: ['music', 'sports']
}

person.name = 'Jonathan Smith';

delete person.address.state;

// function
person.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
}

person.greet();

x = person;
console.log(x);