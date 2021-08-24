// destructuring
const fish = {
    name: 'Hilsha',
    price: 1100,
    color: 'silver',
    address: 'Chandpur',
    places: {
        place1: 'Bay of Bengal',
        place2: 'Oman'
    }
}
const { place1, place2 } = fish.places;
const { name, price, address } = fish;

// optional chaining
// console.log(fish?.places?.place2);
// console.log(fish?.jayga?.place2);

// map
const numbers = [2, 4, 6, 8];
const newNumbers = [];
const doubleIt = number => number * 2;
for (const number of numbers) {
    newNumbers.push(doubleIt(number));
}
// console.log(newNumbers);

const latestNumbers = numbers.map(doubleIt);
// console.log(latestNumbers);

// More map
const products = [
  { name: "Mobile Phone", price: 15000, color: "black" },
  { name: "Smart Watch", price: 5000, color: "black" },
  { name: "Water Bottle", price: 30, color: "white" },
  { name: "Water Glass", price: 5, color: "white" },
];
const prices = products.map(product => product.price);
// console.log(prices);

// Filter - find 
const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const expensive1 = products.find(product => product.price > 100);
// console.log(expensive1); 

// Class 
class Student{
    name;
    address;
    designation = 'student';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    class(time) {
        console.log('class starts at', time, 'am');
    }
}
const mizan = new Student('Mizan', 'Mymensingh');
// mizan.class(9);
// console.log(mizan.address);

// Inheritance
class Common{
    name;
    address;
    designation = 'Teacher';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Teacher extends Common{
    position;
    constructor(name, address, position) {
        super(name, address);
        this.position = position;
    }
    meeting(time) {
        console.log('meeting at ', time);
    }
}
class Principle extends Common{
    visit(time) {
       console.log('Have to visit at', time);
   }
}

const meeting = new Teacher('Umar', 'Koroi Tola', 'Senior Lecturer');
console.log(meeting);