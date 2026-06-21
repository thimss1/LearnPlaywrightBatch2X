// // Step functions - each returns a Promise
function openBrowser() {
    return Promise.resolve("Browser opened"); // step 1 ready!
}

function goToLogin() {
    return Promise.resolve("Login page loaded");  //step 2 ready!
}

function enterCredentials() {
    return Promise.resolve("Credentials entered"); // step 3 ready!
}


function clickLogin() {
    return Promise.resolve("Logged in successfully"); // step 4 ready!
}

// async function - runs all 4 steps in order
async function runTheE2E() {
    let msgl = await openBrowser(); // wait for browser to open
    console.log("Step 1:", msgl);  // print "Step 1: Browser opened"


    let msg2 = await goToLogin();   // wait for login page to load
    console.log("Step 2:", msg2);  // print "Step 2: Login page loaded"

    let msg3 = await enterCredentials(); // wait for credentials to be entered
    console.log("Step 3:", msg3);   // print "Step 3: Credentials entered"


    let msg4 = await clickLogin(); // wait for login to complete
    console.log("Step 4:", msg4);  //print "Step 4: Logged in successfully"
}
runTheE2E();