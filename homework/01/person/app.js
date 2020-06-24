const { Person } = require('./person');

const test = () => {

    const user1 = new Person("Vasya", "Kiev");
    const user2 = new Person("Petya", "Odessa");
    
    console.log(user1.getInfo());
    console.log(user2.getInfo());

}

exports.test = test;
