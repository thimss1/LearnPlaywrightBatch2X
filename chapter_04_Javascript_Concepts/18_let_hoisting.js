console.log(score); // let will never allow this code to be executed ❌ ERROR — cake is still in the oven, too early!
let score = 100;    // cake is finally ready and on the table

// ---- TDZ for "score" starts here ----
// console.log(score); // ReferenceError!  ❌ ERROR — still baking!
// score = 50;         // ReferenceError!  ❌ ERROR — still baking!
// typeof score;       // ReferenceError!  ❌ ERROR — still baking!
// ---- TDZ for "score" ends here ----

let scope = 100;      // Declaration reached, TDZ ends ✅ cake is out! TDZ is over
console.log(score);   // 100 (safe to access now)      ✅ 100 — now you can eat it!
