class Support{
    name;
    address;
    constructor(name, address) { // constructor is a built in function for class to set properties value dynamicly
        this.name = name;
        this.address = address;
    }
    support() {
        console.log(this.name, 'Started a Support Session');
    }
}
const aamir = new Support('Aamir', 'Gulistan')
// console.log(aamir);
aamir.support();