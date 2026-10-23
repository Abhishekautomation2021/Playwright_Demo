const { test, expect } = require('@playwright/test');

test('Handle All Alert Types with Message Validation', async ({ page }) => {

    await page.goto('https://www.hyrtutorials.com/p/alertsdemo.html');

    // ==================================================
    // 1. SIMPLE ALERT
    // Message: I am an alert box!
    // ==================================================

    page.once('dialog', async dialog => {

        console.log('Alert Type:', dialog.type());

        const message = dialog.message();

        console.log('Alert Message:', message);

        expect(message).toBe('I am an alert box!');

        await dialog.accept();
    });

    await page.locator('#alertBox').click();

    console.log('Simple Alert Handled');


    // ==================================================
    // 2. CONFIRM ALERT
    // Message: Press a button!
    // ==================================================

    page.once('dialog', async dialog => {

        console.log('Alert Type:', dialog.type());

        const message = dialog.message();

        console.log('Alert Message:', message);

        expect(message).toBe('Press a button!');

        await dialog.accept();
    });

    await page.locator('#confirmBox').click();

    await expect(page.locator('#output'))
        .toHaveText('You pressed OK in confirmation popup');

    console.log('Confirm Alert Handled');


    // ==================================================
    // 3. PROMPT ALERT
    // Message: Please enter your name:
    // ==================================================

    page.once('dialog', async dialog => {

        console.log('Alert Type:', dialog.type());

        const message = dialog.message();

        console.log('Alert Message:', message);

        expect(message).toBe('Please enter your name:');

        await dialog.accept('Abhishek');
    });

    await page.locator('#promptBox').click();

    await expect(page.locator('#output'))
        .toContainText('Abhishek');

    console.log('Prompt Alert Handled');

});