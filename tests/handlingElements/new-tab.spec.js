const { test, expect } = require('@playwright/test');

test('Handle New Tab and Prompt Alert', async ({ page }) => {

    await page.goto(
        'https://www.hyrtutorials.com/p/window-handles-practice.html'
    );

    // Open New Tab
    const [newTab] = await Promise.all([
        page.context().waitForEvent('page'),
        page.locator('#newTabBtn').click()
    ]);

    await newTab.waitForLoadState();

    console.log('Tab Title = ', await newTab.title());

    // Handle Prompt Alert
    newTab.on('dialog', async dialog => {

        console.log('Alert Message = ', dialog.message());
await page.waitForTimeout(5000);
        // Enter text in prompt box
        await dialog.accept('Abhishek');
    });

    // Click button that opens prompt
    await newTab.locator('#promptBox').click();

    // Validate entered text result
    await expect(
        newTab.locator('#output')
    ).toContainText('Abhishek');

    console.log('Prompt handled successfully');

    // Close child tab
    await newTab.close();

    // Back to Parent Window
    console.log('Parent Page Active');
});