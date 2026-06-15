let a_post = 10; // a_post starts at 10
let b = a_post++; // b grabs 10 FIRST, then a_post levels up to 11

// post ++ -> first assign the value and then increase
console.log(a_post); // 11 — a_post already leveled up after the assignment
console.log(b);      // 10 — b grabbed the value BEFORE the level up!


