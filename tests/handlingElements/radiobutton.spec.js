const { test, expect } = require('@playwright/test');

test('Handle All Radio Buttons', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const radioButtons = page.locator("input[type='radio']");

    const count = await radioButtons.count();
    console.log(`Total Radio Buttons: ${count}`);

    // Select and validate each radio button
    for (let i = 0; i < count; i++) {

        await radioButtons.nth(i).check();

        await expect(
            radioButtons.nth(i)
        ).toBeChecked();

        const value = await radioButtons.nth(i).getAttribute('value');

        console.log(`Selected Radio Button: ${value}`);

        await page.waitForTimeout(1000);
    }
});