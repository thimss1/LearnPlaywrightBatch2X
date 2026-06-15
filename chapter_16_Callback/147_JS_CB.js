console.log("Test 1: started"); // step 1 — print this right away

setTimeout(function () {
    console.log("Test 2: API response received"); //// this waits 2000ms (2 seconds)
}, 2000);

console.log("Test 3: moving to next test"); // step 3 — runs RIGHT AWAY, doesn't wait!

