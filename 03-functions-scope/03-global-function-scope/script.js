// window.alert('hello');

console.log(window.innerWidth);


const x = 100;
console.log(x, ' in global');


function run() {
    console.log(window.innerHeight);
    console.log(x, ' in local');
}

run();

function add() {
    const y = 50;
    console.log(x + y)
}

add();

