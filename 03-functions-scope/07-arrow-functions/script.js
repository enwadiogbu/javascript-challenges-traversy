// Arrow functions introduced in 2015

function add(a,b) {
    return a + b;
}

console.log(add(1,2));

// Arrow
const subtract = (a,b) => {
    return a - b;
}
console.log(subtract(4,5));

const createObject = () => ({
    name: 'Brad'
});

console.log(createObject());


const numbers = [1,2,3,4,5,6,7];

numbers.forEach(function(n) {
    console.log(n)
})
