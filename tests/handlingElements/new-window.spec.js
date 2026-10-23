const { test, expect } = require('@playwright/test');

test('Handle New Window', async ({ page }) => {

    await page.goto(
        'https://www.hyrtutorials.com/p/window-handles-practice.html'
    );

    // Parent Window
    console.log(
        'Parent Title : ',
        await page.title()
    );

    // Open Window
    const [newWindow] = await Promise.all([
        page.context().waitForEvent('page'),
        page.locator('#newWindowBtn').click()
    ]);

    await newWindow.waitForLoadState();

    // Child Window Title
    console.log(
        'Window Title : ',
        await newWindow.title()
    );

    // Child URL
    console.log(
        'Window URL : ',
        newWindow.url()
    );

    // Enter Data
    await newWindow.locator('#firstName')
        .fill('Playwright');

    await expect(
        newWindow.locator('#firstName')
    ).toHaveValue('Playwright');

    // Close Window
    await newWindow.close();

    console.log('Child Window Closed');

    // Work on Parent
    await page.locator('#name')
        .fill('Parent Window Active');
});