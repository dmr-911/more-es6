// declare variable based on the name of an object property
const fish = {
  // nested object
  name: "king Hilsha",
  price: 1122,
  color: "silver",
  location: {
    location1: "Bay of bengal",
    location2: "Padma River",
  },
};
const { location1, location2 } = fish.location;

const numbers = [1, 2, 4, , 5, 6];
const [tumi, ami] = numbers;
// console.log(tumi, ami);

// optional chaining
console.log(fish?.address?.location)