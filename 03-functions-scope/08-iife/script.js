// IIFE Immediately Invoked Function Expressions



(function () {
    const user = 'John';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
})();