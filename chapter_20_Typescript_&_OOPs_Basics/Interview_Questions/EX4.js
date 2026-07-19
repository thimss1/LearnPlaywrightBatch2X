// Exercise 4:  Method Chaining with this

class Counter {
    constructor() {
        this.count = 0; //counter starts at 0
    }
    increment() {
        this.count++;  // adds 1 to the count
        return  this; //hands the counter back to you
    }

    display() {
        console.log("Count:", this.count); // prints the number
        return this;    // hands the counter back
    }
}

new Counter().increment().increment().increment().display();