let testResults = ["Pass", "Fail", "Pass", "Skip"];  // a list of 4 test results - index: 0, 1 , 2 3

testResults.forEach(function (result, index) {
    console.log("Test" + index + "=> " + result);
})

// This is a perfect example of a synchronous callback where
// the anonymous function will take the item 1 by 1,
// it will take the index 1 by 1, it will take
// the result 1 by 1, and print the value 1 by 1.