function openBrowser() {
    return new Promise (function (resolve)  {
        // Code to open the Browser
        resolve("Open the Browser");
    })
}
    /* function openBrowser(callback) {
        setTimeout(function () {
            console.log("Step 01: Chrome browser openedca");
            callback();
        }, 500);
    } */


    function goToLogin() {
        return new Promise(function (resolve) {
            resolve("Login page loaded");
        });
    }

     function enterCredentials() {
        return new Promise(function (resolve) {
                resolve("Credentials entered");
        });
    }

    function clickLogin() {
        return new Promise(function (resolve) {
            resolve("Logged in successfully");
        });
    }
   

    openBrowser().then(function(msg) {
        console.log("Step 1 - Open Browser");
        return goToLogin();
    }).then(function (msg) {
        console.log(("Step 2 :", msg))
        return enterCredentials();
    
    }).then(function (msg) {
        console.log(("Step 3 :", msg))
        return clickLogin();
    }).then(function (msg) {
        console.log(("Step 4 :", msg))
       console.log("Done execution!");
    });