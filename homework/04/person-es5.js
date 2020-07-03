const EventEmitter = require("events");

function Person(name) {
    EventEmitter.call(this);
    this.name = name;
    this.speak = function (msg) { 
        console.log(this.name + " says: " + msg);
    };   
}

Person.prototype = new EventEmitter();
Person.prototype.constructor = Person;

module.exports = Person;
