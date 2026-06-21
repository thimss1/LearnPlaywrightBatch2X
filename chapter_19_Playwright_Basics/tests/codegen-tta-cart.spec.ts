import { test, expect } from '@playwright/test';

// Test 1 - Invaild username & password
test('invalid login', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('abc');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('abcbcbc');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="error"]').click({
        button: 'right'
    });
    await page.locator('[data-test="error"]').click();
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'TTACart' })).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username');

});




// Test 2 - Valid username & password

test('valid login', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').press('Tab');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('tta_secret');
  await page.locator('[data-test="login-button"]').click();
});