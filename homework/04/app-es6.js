const Person = require("./person-es6");

const bill = new Person("Bill");
const tom = new Person("Tom");

bill.on("says", message => bill.speak(message));
tom.on("says", message => bill.speak(message));

module.exports = {
    bill,
    tom,
}
