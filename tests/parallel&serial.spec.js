
const { test, expect } = require('@playwright/test');

test.describe('Parallel test group', () => {
  test.describe.configure({ mode: 'parallel' });

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
