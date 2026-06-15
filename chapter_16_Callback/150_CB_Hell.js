// Real QA Scenario: End-to-End Login for the App.vwo.com


// Openbrowser()
// goToLoginPage()
// enterCredentials()
// ClickLogin()

function openBrowser(callback) {
    console.log("opening the chrome browser");
    setTimeout(function () {
        callback();

    }, 1000);
}

function goToLoginPage(callback) {
    setTimeout(function () {
        console.log("Step 2: Login page loaded");
        callback();

    }, 2000);
}

function enterCredentials(callback) {
    setTimeout(function () {
        console.log("Step 3: Credentials entered");
        callback();

    }, 1000);
}
function ClickLogin(callback) {
    setTimeout(function () {
        console.log("Step 4: Login button clicked");
        callback();

    }, 1000);
}


// THIS IS CALLBACK HELL 

openBrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function () {
            ClickLogin(function () {
                console.log("Test Complete!");
            })
        })
    })
})

