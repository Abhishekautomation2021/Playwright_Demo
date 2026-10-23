const { test, expect } = require('@playwright/test');

test('Handle All Checkboxes', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const checkboxes = page.locator("input[type='checkbox']");

    const count = await checkboxes.count();

    console.log(`Total Checkboxes: ${count}`);

    // Check all checkboxes
    for (let i = 0; i < count; i++) {

        await checkboxes.nth(i).check();

        await expect(
            checkboxes.nth(i)
        ).toBeChecked();

        console.log(`Checkbox ${i + 1} Checked`);
    }

    await page.waitForTimeout(2000);

    // Uncheck all checkboxes
    for (let i = 0; i < count; i++) {

        await checkboxes.nth(i).uncheck();

        await expect(
            checkboxes.nth(i)
        ).not.toBeChecked();

        console.log(`Checkbox ${i + 1} Unchecked`);
    }
});