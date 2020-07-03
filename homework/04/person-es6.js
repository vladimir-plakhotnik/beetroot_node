const EventEmitter = require("events");

class Person extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }

    speak(msg) { 
        console.log(`${this.name} says ${msg}`);
    };    
}

module.exports = Person;
