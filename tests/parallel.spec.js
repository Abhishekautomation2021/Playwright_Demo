
const { test, expect } = require('@playwright/test');

test('Test 1 - Check page title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('Test 2 - Check documentation link', async ({ page }) => {
  await page.goto('https://www.google.com');

});

test('Test 3 - Check installation heading', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
 
});

test('Test 4 - Check navigation', async ({ page }) => {
  await page.goto('https://www.udemy.com/');
 
});


test('Test 5 - Check navigation', async ({ page }) => {
  await page.goto('https://www.linkedin.com/');
 
});


test.describe('Parallel test group', () => {
  test.describe.configure({ mode: 'serial' });

  test('Check Playwright title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('Check example website', async ({ page }) => {
    await page.goto('https://example.com/');
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('Check Wikipedia title', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await expect(page).toHaveTitle(/Wikipedia/);
  });
});

