// Objects
// Key and value

let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 9876544320 };


// Key will not be in the doubt quotes`
// below key in doubt is actually JSON`

let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };

let a = { status: "pass" };
//console.log(a.status);
//console.log(a["status"]);


// let a1 = { status: 'pass' };
// console.log(a1.status);

let b = a;  // b points to the same ID card as a
b.status = "fail"; // we changed b.... but actually changed a too!
console.log(a.status);  // fail
console.log(b.status);  // fail

let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

if (b === a) {
    console.log("true");
} else {
     console.log("false");
}

