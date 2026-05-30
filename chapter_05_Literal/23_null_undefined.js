// Difference between null and undefined in JavaScript

// undefined:
// - A variable is declared but not assigned a value
let x;
console.log(x); // Output: undefined

// null:
// - A variable is assigned with null as an intentional absence of any value
let y = null;
console.log(y); // Output: null

// Extra Example:
function test() {
  // No return statement
}
console.log(test()); // Output: undefined

let person = null; // person object doesn't exist yet, set to null on purpose

// Typeof operator differences:
console.log(typeof x); // "undefined"
console.log(typeof y); // "object" (null is seen as object, this is a JavaScript quirk)

// Summary:
// undefined: Variable declared, not assigned a value
// null: Value is purposely set to nothing

// 1.  Undefined
let userName; // declared but not assigned
console.log(userName);  // undefined
console.log(typeof userName);  //undefined

function greet() {
  // no return statemnet
}
console.log(greet()); //undefined

let person = { name: "Alice" };
console.log(person.age);  // undefined (property does not exist)

let fruits = ["apple", "banana"];
console.log(fruits[5]); //undefined (index out of range)

// 2. null
let profilePicture = null; // developer explicitly says "no picture yet"
console.log(profilePicture);  // null
console.log(typeof profilePicture); //"object" <--known JS quirk!

let score = 100;
score = null;  // developer clears the value intentionally
console.log(score); //null

// 3. Key Difference Summary Table
