// Exercise 3: `this` Refers to Current Ojbect
class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hi, I am " + this.name);
    }
}

let u1 = new User("Allison");
let u2 = new User("Roberto");

u1.greet();
u2.greet();
