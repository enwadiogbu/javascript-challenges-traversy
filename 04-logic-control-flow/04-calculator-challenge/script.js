// Calculator challenge
function calculator(num1, num2, operator) {
    
    let result;
    if (operator === '+') {
        result = num1 + num2;
    } else if(operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else {
        console.log('Invalid operator');
    }
    console.log(result)
    return result;
}
calculator(5,6,'*');

