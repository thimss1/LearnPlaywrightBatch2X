function print() {
    console.log("Normal Function is called");
}

function placeOrder(item, pramodCallback) {
    console.log("Hi, Your order is placed"); // waiter confirms order
    pramodCallback(); // waiter does the extra thing you asked!
}

// First Way -  anonymous function inside: - Like ordering a burger AND while waiting, ordering a pizza too!
placeOrder("Burger", function () {
    console.log("Hi, How are you!");  //runs after burger is ordered

    placeOrder("Pizza", function () {
        console.log("Anony Fn"); // runs after pizza is ordered
    }); // ✅ closes inner placeOrder
}); // ✅ closes outer placeOrder

// Second Way -  passing a named function: ie - After my pizza order — call JOHN, he knows what to do!" 
placeOrder("Pizza", print);

placeOrder("Burger", function () {  // this is a brand new function
    console.log("Anoy Fn, I am also a function without a name!");  //"After my burger order — do THIS thing I'm describing right now!" 
});

// Third Way - Arrow Function => Same as the anonymous function but written with => — shorter and cleaner! 
placeOrder("Momos", () => {
    console.log("Arrow Fn, I am also a function without a name!");

})