const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const longest = friends.map(friend => friend.length);
console.log(longest);

const products = [

    { name: 'Mobile Phone', price: 15000, color: 'black'},
    { name: 'Smart Watch', price: 5000, color: 'black'},
    { name: 'Water Bottle', price: 30, color: 'white'},
    { name: 'Water Glass', price: 5, color: 'white'}
]

const item = products.map(product => product.name); // returns an array
products.forEach(product => console.log(product.color)) // if value return is not needed we can use forEach suppliment of map