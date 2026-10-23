const { test, expect } = require('@playwright/test');

test('My first event listener', async ({ page }) => {

    page.on('load', () => {
        console.log('My page has loaded!');
    });

    await page.goto('https://example.com');

});


test('Listen for button click', async ({ page }) => {

    await page.setContent(`
        <button id="login">Login</button>
    `);

    await page.locator('#login').evaluate(button => {
        button.addEventListener('click', () => {
            console.log('Login button clicked!');
        });
    });

    await page.locator('#login').click();

});

test('My on/off event listener', async ({ page }) => {

page.on('request', request => console.log(`Request sent: ${request.url()}`));
const listener = request => console.log(`Request finished: ${request.url()}`);

page.on('requestfinished', listener);
await page.goto('https://wikipedia.org');

page.off('requestfinished', listener);
await page.goto('https://www.openstreetmap.org/');
});


test('page.once example', async ({ page }) => {

  page.once('request', request => {
    console.log(`First request only: ${request.url()}`);
  });

  await page.goto('https://wikipedia.org');

});


test('waitForRequest example', async ({ page }) => {

  const requestPromise = page.waitForRequest(
    request => request.url().includes('logo')
  );

  await page.goto('https://wikipedia.org');

  const request = await requestPromise;

  console.log('Found request:', request.url());
});


test('Popup demo waitForEvent', async ({ page }) => {

  const popupPromise = page.waitForEvent('popup');

  await page.goto('https://example.com');

  await page.evaluate(() => {
    window.open('https://www.microsoft.com', '_blank');
  });

  const popup = await popupPromise;

  await popup.waitForLoadState();

  console.log('Popup URL:', popup.url());

  // Opens Playwright Inspector
 // await page.pause();
});

test('Handle alert using page.on', async ({ page }) => {

  // Event Listener
  page.on('dialog', async dialog => {
    await dialog.accept();
  });

  await page.goto(
    'https://rahulshettyacademy.com/AutomationPractice/'
  );

  await page.locator('#name').fill('Abhishek');

  await page.locator('#alertbtn').click();

  await page.waitForTimeout(5000);
});




test.only('Download Event Demo', async ({ page }) => {

  // Event Listener
  page.on('download', async download => {

    console.log('================================');
    console.log('✅ DOWNLOAD EVENT DETECTED');
    console.log('File Name:', download.suggestedFilename());
    console.log('Download URL:', download.url());
    console.log('================================');

    // Pause execution the moment event fires
    await page.pause();

  });

  await page.goto('https://filesamples.com/formats/csv');

  // Accept cookies
  await page.locator('#ez-accept-all').click();

  console.log('Waiting for user action...');

  // Trigger download
  await page.locator('a[href="/samples/document/csv/sample4.csv"]').click();

  // Keep browser open for demo
  await page.waitForTimeout(5000);
});

