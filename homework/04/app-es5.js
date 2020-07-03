const Person = require("./person-es5");

const bill = new Person("Bill");
const tom = new Person("Tom");

bill.on("says", function (message) {
    bill.speak(message)
});

tom.on("says", function (message) {
    tom.speak(message)
});

module.exports = {
    bill,
    tom,
}
