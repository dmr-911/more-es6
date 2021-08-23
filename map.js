const numbers = [2, 4, 6, 8];
// const doubleNumbers = [];

const doubleIt = number => number * 2; 

// for (const number of numbers) {
//     const double = doubleIt(number);
//     doubleNumbers.push(double)
// }
// console.log(doubleNumbers);

// map
const output = numbers.map(doubleIt);
console.log(output);