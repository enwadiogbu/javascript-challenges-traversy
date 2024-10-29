//Function Challenge

// challenge #1
function getCelcius(F) {
    return (F - 32) * 5/9;
}


console.log(`The temperature is ${getCelcius(100)}\xB0C`);

//challenge #2
function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    return {
        min,
        max
    }
}

console.log(minMax([1,2,3,4,5]));
