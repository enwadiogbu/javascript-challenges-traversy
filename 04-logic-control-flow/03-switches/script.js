const d = new Date(2022,3,15,8,0,0);
month = d.getMonth();
const hour = d.getHours();
console.log(month);

//Switch statements
switch (month) {
    case 1:
        console.log('It is January.');
        break;
    case 2:
        console.log('It is February');
        break;
    case 3:
        console.log('It is March');
        break;
    default:
        console.log('It is not January, February, or March')
        break;
}

switch (true) {
    case hour < 12: 
        console.log('Good morning');
        break;
    case hour < 18:
        console.log('Good afternoon');
        break;
        default:
            console.log('Good night');
            break;
}