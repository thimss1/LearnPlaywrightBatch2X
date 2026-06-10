// spread operator

const obj1 = { a: 1, b: 2 }; // original object
const obj2 = { c: 3, d: 4 }; // another object (not used yet)
 
const copy = { ...obj1 };     // copy EVERYTHING from obj1 into copy
console.log(copy)

