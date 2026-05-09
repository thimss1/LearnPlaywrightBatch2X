// hot code is when you run something multiple times - its code that needs optimization that is complex or loops 
console.log("Hello");

function add(a, b) {
    return a + b;
}
let result;
for (let i = 0; i < 100000; i++) {
    result = add(i, i + 1);
}
console.log("After 10000 calls:", result);