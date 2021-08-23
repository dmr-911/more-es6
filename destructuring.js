const fish = { // nested object
    name: 'king Hilsha',
    price: 1122,
    color: 'silver',
    location: {
        location1: 'Bay of bengal',
        location2: 'Padma River'
    }
}

const { location1, location2 } = fish.location;
console.log(location1, location2);