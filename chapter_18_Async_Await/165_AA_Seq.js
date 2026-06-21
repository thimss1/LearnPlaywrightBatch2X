// When Step 2 depends on Step 1's result, you MUST run them sequentially.

// Step 1 - Step 2
function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name + " 200 ok")

        }, 2000);
    })

}

async function seqTest() {

    console.log("Starting of the Test");
    let start = Date.now();

    let r1 = await apiCall("Login");
    console.log(r1); 

    let r2 = await apiCall("Dashboard");
    console.log(r2);

    let r3 = await apiCall("Report");
    console.log(r3);

    console.log("Time: ~" + (Date.now() - start) + "ms");
    
}

seqTest();


async function parallelTest() {
    let [r1, r2, r3] = await Promise.all([

        apiCall("Auth Service"),
        apiCall("User Account Creation"),
        apiCall("Support Page API"),

    ])

    console.log(r1);
    console.log(r2);
    console.log(r3);
    
    
}
parallelTest();