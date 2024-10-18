let x;

const todo = new Object();

todo.id = 1;
todo.task = 'Buy Groceries';
todo.completed = false;
x = todo;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {...obj1, ...obj2};


const todos = [
    {id: 1, task: 'Buy Milk'},
    {id: 2, task: 'Pickup kids from school'},
    {id: 3, task: 'Learn Javascript'},
]

x = todos[1].task;

x = Object.keys(todo);

console.log(x)