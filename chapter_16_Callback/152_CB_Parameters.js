//Part 1 — Basic callback
function greetingTester(name, callback) {
    console.log("Welcome, " + name); // prints the name
    callback(); //  // runs the callback after!
}

greetingTester("Dev", function () {
    console.log("Let's start testing!"); // this runs after the welcome!

});

// Callback with Parameters
function runTest(testName, callback) {
    let status = "PASS"; // the test result is determined here
    callback(testName, status);  // pass BOTH the name and result to the callback
}

runTest("Login Test", function(name, result) {
    console.log(name + " -> " + result); // prints the test name and result
    
});

//  Synchronous callback with forEach
let bugs = ["UI glitch", "API timeout", "Wrong redirect"];  // list of 3 bugs

bugs.forEach(function (bug, i) {
    console.log("Bug #" + (i + 1) + ": " + bug); // print each bug with its number
});

console.log("Total bugs: " + bugs.length); // print total count at the end
