const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
    
};

console.log(user); //  prints the whole ID card
console.log(user.name);
console.log(user["age"]);

//  Dynamic property access
const key = "age"; // store the label name in a variable
console.log(user[key]);   // same as user["age"] → prints 30

//  Addingin/modifying properties
user.city = "NYC"; // add a brand new label that didn't exist before!
user.age = 31; // update age from 30 to 31

console.log(user); // { name: "John", age: 31, email: "john@example.com", city: "NYC" }

let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// {
// value: "Login",
// writable: true,      ← can change the value
// enumerable: true,    ← shows in for...in / Object.keys()
// configurable: true   ← can delete or redefine
// }