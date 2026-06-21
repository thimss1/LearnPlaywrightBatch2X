function getToken ()  {
    return Promise.resolve("abc123")
}

// Playwright
// page.goto() - Promise ()
// await page.goto(); 


async function run() {
    let getToken = await getToken();
    console.log(Token);
}
run();
