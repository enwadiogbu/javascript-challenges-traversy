let x;


const person = {
    name: 'John',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main Street',
        city: 'Boston',
        state: 'MA'
    }
}

x = person.name;
x = person['age'];
x = person.address.street;

console.log(x);