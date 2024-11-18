// Logical Operators
console.log(10 < 20 && 30 < 15);
console.log(10 > 20 || 30 > 15);

// && - will return the first falsy value or the last value
let a;
a  = 10 && 20;
console.log(a);

const posts = ['Post One', 'Post Two'];

posts.length > 0 && console.log(posts[0]);

//|| - Will return the first truthy value or the last value
let b;

b = 10 || 20;
console.log(b)

//??  will return the right side operand when the left is null or undefined
let c;

c = 10 ?? 20;
c = null ?? 20;


console.log(c);