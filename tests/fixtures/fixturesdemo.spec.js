const { test,chromium } = require('@playwright/test');
test('test without using fixture', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://example.com');

  await browser.close();
});

test('test with using fixture', async ({ page }) => {
  await page.goto('https://example.com');
});

test('context fixture', async ({ context }) => {

  const page1 = await context.newPage();
  const page2 = await context.newPage();

  await page1.goto('https://example.com');
  await page2.goto('https://google.com');

});

test('Hierarchy example', async ({ browser }) => {

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://example.com');
});

test('Admin User', async ({ browser }) => {

  const adminContext = await browser.newContext();

  const userContext = await browser.newContext();

  const adminPage = await adminContext.newPage();

  const userPage = await userContext.newPage();

});




test('API test', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1',
    { ignoreHTTPSErrors: true }
  );

  console.log(await response.json());
});




test.only('browserName example', async ({ browserName }) => {
  console.log(browserName);
});
