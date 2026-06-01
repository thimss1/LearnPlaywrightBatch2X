let a = 10; // a is already 11 now, gives us 11
console.log(++a + a);  // add 1 FIRST → a becomes 11, gives us 11
console.log(a); //a = 11



let a = 10;
console.log(a++ + ++a); //22 
console.log(a);  // 12 - this is where it ended up

//a++  // use 10 FIRST ✋ then a becomes 11  → gives us 10
++a  // a is 11, add 1 FIRST → a becomes 12, gives us 12

//a++ grabs the old value of 10 before leveling up, then ++a levels up first and gives 12, so you get 10 + 12 = 22 and a ends up at 12! 


let a = 10;
console.log(++a + ++a);;
console.log(a);


// Track a changing throughout:
// -------------------------------------------
// Step | Operation | Value Used | a After
// -------------------------------------------
// 1    | ++a       | 11         | 11
// 2    | ++a       | 12         | 12
// -------------------------------------------

// Math: 11 + 12 = 23
// Output: 23

// Pre decrement
let a = 10;
let b = --a; // decrease FIRST → a becomes 9, b gets 9
// console.log(b); // 9
// console.log(a); // 9

// Post decrement
a = 10; // reset a back to 10
b = a--; // b gets 10 FIRST, then a becomes 9

console.log(b); // 10 ← b got the value BEFORE decrement
console.log(a); // 9  ← a decremented after