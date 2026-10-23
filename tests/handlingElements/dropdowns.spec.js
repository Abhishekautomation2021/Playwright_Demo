const { test, expect } = require('@playwright/test');

test('Dropdown Handling - Value Label Index', async ({ page }) => {

    // Navigate to application
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // ==================================
    // Select By Value
    // ==================================
    await page.locator('#dropdown-class-example')
        .selectOption('option2');

    // Pause to see selection
    await page.waitForTimeout(2000);

    // ==================================
    // Select By Label (Visible Text)
    // ==================================
    await page.locator('#dropdown-class-example')
        .selectOption({ label: 'Option3' });

    await page.waitForTimeout(2000);

    // ==================================
    // Select By Index
    // ==================================
    await page.locator('#dropdown-class-example')
        .selectOption({ index: 1 });

    await page.waitForTimeout(2000);

});
``