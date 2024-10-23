function registerUdser(user = 'Bot') {
    // if (!user) {
    //     user = 'Bot'
    // }
    return user + ' is registered!';
}

console.log(registerUdser('John'));

// Rest parameters puts your params in an array
function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1,2,3, 4, 5))

// Objects as Params
function loginUser(user) {
    return `The user  ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id: 1,
    name: 'John'
};

console.log(loginUser(user));

// Arrays as Params

function randomNumber(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    
    const item = arr[randomIndex];

    console.log(item);
}


randomNumber([23,56,85,45,65,4
]);