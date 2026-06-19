let testRun = new Promise(function (resolve, reject) {
    let apiCall = true;
    if (apiCall) {
        resolve({ "status": "done" });
    } else {
            reject("Assertion Failed");
        }
    });

testRun.then(function (data) {
    console.log(data);
}).catch(function (error) {  //catch runs when it fails
    console.log(error); // skipped this time because it worked!
}).finally(function () {  //Always runs no mattter what
    // This code will be always executed any how.
    console.log("It will be executed any how!")
})
