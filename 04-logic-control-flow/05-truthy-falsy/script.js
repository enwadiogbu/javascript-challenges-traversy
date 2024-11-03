//Truth and Falsy values
// - false
// - 0
// - ""
// null
// undefined
// NaN


const x = '';

if (x) {
    console.log('This is truthy')
} else {
    console.log('This is falsy')
}
console.log(Boolean(x));

// Checking for empty arrays
const posts = ['Post one', 'Post two'];
console.log(posts.length);

if (posts.length > 0) {
    console.log('List posts');
} else {
    console.log('No Posts to list');
}


const user = {
    name: 'Brad',
    age: 27
}

if(user) {
    console.log('List user', user);
} else {
    console.log("No User");
}