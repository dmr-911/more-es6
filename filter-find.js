const numbers = [3, 5, 12, 33, 42, 55, 5, 2];
const maxNumber = numbers.filter(number => number > 30);
// console.log(maxNumber);

const products = [
  { name: "Mobile Phone", price: 15000, color: "black" },
  { name: "Smart Watch", price: 5000, color: "black" },
  { name: "Water Bottle", price: 30, color: "white" },
  { name: "Water Glass", price: 5, color: "white" },
];

const expensiveItems = products.filter(product => product.price > 100);
// console.log(expensiveItems); // returns element array

const expensiveItems1 = products.find(product => product.color == 'black');
console.log(expensiveItems1); // returns the first element