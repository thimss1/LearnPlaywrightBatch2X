
import { test, expect } from '@playwright/test';

// Basic Async and Await

async function getTestResult() {  // this returns a Promise automatically!
    return "Pass"; // prints "Pass"
}
getTestResult().then(function (res) {
    console.log(res);
});

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    //  Expect a title to "contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);

    let r = page.locator('h1');//needs a selector
});
