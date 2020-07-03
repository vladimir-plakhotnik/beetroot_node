const es5 = require("./app-es5");
const es6 = require("./app-es5");

es5.bill.emit("says", "Hello in ES5");
es5.tom.emit("says", "Hello in ES5");

es6.bill.emit("says", "Hello in ES6");
es6.tom.emit("says", "Hello in ES6");
