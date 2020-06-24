class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    getInfo() {
        return `name: ${this.name}, address: ${this.address}`;
    }
}

module.exports = { Person };