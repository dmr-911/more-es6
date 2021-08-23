const hubby = 'Omar suny';
let phone = 'iPhone 14';
phone = 'Samsung Galaxy s17';

// template string 
const myNotes = `I am mojnu, I don't have a laili. And I don't have ${phone} to show off`;

// default parameter and spread operator
function maxNumber(array = [0, 1, 2, 3, 4, 5, 6]) {
    const max = Math.max(...array);
    return max;
}

// arrow function 
const square = x => x * x;
// console.log(square(8));