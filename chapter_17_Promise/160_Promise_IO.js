/* let p = new Promise(function (resolve, reject) {
    resolve(42);
});
p.then(function (value) {
    console.log("Answer:", value);
}); */

/* let p = new Promise(function (resolve, reject) {
    reject("Something broke");
});

p.catch(function (err) {
    console.log("Caught:", err);
    
});
 */
/* let p = Promise.resolve(5);

p.then(function (val) {
    return val * 10;
}).then(function (val) {
    console.log("Result:", val);
}); */

/*
    Interview questions you could be asked:
    The direct way:
    "What is Promise chaining and how does it work?"
    Promise chaining is like a factory assembly line where each .then() 
    receives the result from the previous one, does something to it, 
    and passes it along. The KEY thing to remember in interviews is that 
    you MUST return the value or the next .then() gets undefined!
*/

/* Promise.resolve(1)
    .then(function (val) {
        console.log(val);
        return val + 1;  
    })
    .then(function (val) {
        console.log(val);
        return val + 1;
    })
    .then(function (val) {
        console.log(val);
        
    });
 */
/* Promise.resolve("start") // start the race with "start"
    .then(function (val) {
        console.log(val); //prints "start"
        throw new Error("Broke at step 2"); // Runner 2 trips and falls!
    })
    .then(function () {
        console.log("This will NOT run"); //Runner 2 trips and falls!
    })
      .catch(function (err){
        console.log("Caught:", err.message);
      }); */
/*
Interview Question (BrowserStack):
"What will be the output of the following code and why?"

Promise.resolve("start")
    .then(function (val) {
        console.log(val);
        throw new Error("Broke at step 2");
    })
    .then(function () {
        console.log("This will NOT run");
    })
    .catch(function (err) {
        console.log("Caught:", err.message);
    });

Answer:
The output is:
start
Caught: Broke at step 2

Why?
1. Promise.resolve("start") starts the chain with the value "start"
2. The first .then() prints "start" then throws an error
3. The second .then() is completely skipped because an error was thrown
4. .catch() catches the error and prints the message using err.message
5. When you throw new Error() you must use .message to get the text out
 
Key rule to remember:
Throwing an error inside .then() skips ALL remaining .then() calls
and jumps straight to .catch() -- just like a relay runner falling
and the paramedic rushing in while the other runners just stand there!
*/

/* Promise.reject("Test failed") // ❌ launch failed immediately!
    .then(function (data) {
        console.log("Data:", data);  // 🚫 completely skipped!
    })
    .catch(function (err) {
        console.log("Error:", err);   // ✅ prints "Error: Test failed"
    })
    .finally(function () {
        console.log("Cleanup done"); // ✅ Finally ALWAYS runs no matter what!
    }); */

/* Promise.resolve("Quick win").then(function (msg){
    console.log(msg);
});

Promise.reject("Quick loss").catch(function (msg) {
    console.log(msg);
}); */

/* let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.resolve("Search: PASS");
let t3 = Promise.resolve("Logout: PASS");

Promise.all([t1, t2, t3]).then(function (results) {
    console.log(results);  //Each test puts its result in the cabinet — and only when ALL tests are done does the cabinet 
    // get displayed!
}); */

/* Promise.allSettled([
    Promise.resolve("API 200"), // ✅ this one passes
    Promise.reject("API 500"),  // ❌ this one fails
    Promise.reject("API 201"),  // ❌ this one fails too
]).then(function (results) {
    results.forEach(function (r) {
        let val = r.status === "fulfilled" ? r.value : r.reason;
        console.log(r.status + " -> " + val);
    });
}); */
// The one sentence answer:
// Promise.allSettled is the fair teacher who marks EVERY test and reports
// ALL results pass or fail using r.value for passes and r.reason for failures!


/* let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.reject("Search: FAIL");
let t3 = Promise.resolve("Logout: PASS");

Promise.all([t1, t2, t3])
    .then(function (r) { console.log("All:", r); })  // 🚫 SKIPPED — one test failed
    .catch(function (err) { console.log("Stopped:", err); }); // ✅ catches the failure immediately! */


    Promise.allSettled([
    Promise.resolve("API 200"),  // ✅ API call 1 worked!
    Promise.reject("API 500"),   // ❌ API call 2 failed!
    Promise.resolve("API 201"),   // ✅ API call 3 worked!
]).then(function (results) {
    results.forEach(function (r) {
        let val = r.status === "fulfilled" ? r.value : r.reason;
        console.log(r.status + " -> " + val);
    });
}); 


 Promise.allSettled([
    Promise.resolve("API 200"),  // ✅ API call 1 worked!
    Promise.reject("API 500"),   // ❌ API call 2 failed!
    Promise.resolve("API 201"),   // ✅ API call 3 worked!
]).then(function (results) {
    results.forEach(function (r) {
        console.log(r);  //r is just a nickname for each item!
    });
}); 













