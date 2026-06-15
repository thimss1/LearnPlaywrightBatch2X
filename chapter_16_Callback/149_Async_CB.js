console.log("Test 1: started"); // prints immediately

setTimeout(function () {
    console.log("Test 2: API response received!") // waits 2000ms (2 seconds) before printing
}, 2000);

console.log("Test 3: Moving to next last"); // prints immediately, doesn't wait for the timer!

