
const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));   // ["a", "b", "c"] — just the labels!
console.log(Object.values(obj)); // [1, 2, 3] — just the values!
console.log(Object.entries(obj)); // [["a",1], ["b",2], ["c",3]]


const user = { name: "John", age: 30 };

// for ...in loop
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

/* //Object.keys/values/entries
Object.keys(user).forEach(key => {
    console.log(key);
}); */

// forEach with entries
Object.entries(user).forEach(([key, value]) => { // ✅ double brackets
    console.log(`${key}: ${value}`);
});

//Interview questions you could be asked:
// The direct way:
//"What does Object.keys() and Object.values() return?"

/*The one sentence answer:
Object.keys() gives you an array of all the labels, Object.values() gives you an array of all the values,
 and Object.entries() gives you both together — and interviewers LOVE asking about all three! */