class Common {
  name;
  address;
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

class Support extends Common{
  support() {
    console.log(this.name, "Started a Support Session");
  }
}

class Friend{
    proxy(name) {
        console.log(this.name, 'has given a proxy of', name);
    }
}

class College extends Common{
    time;
    constructor(name, address, time) {
        super(name, address);
        this.time = time;
    }
    top(rank) {
        console.log(this.name, 'Ranked', rank);
    }
}

const aamir = new Support("Aamir", "Gulistan");

const college = new College('RMC', 'Mymensingh', 4);
console.log(college);
