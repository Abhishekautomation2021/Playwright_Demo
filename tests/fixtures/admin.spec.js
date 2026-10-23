const { test } = require('./fixture.js');

test('Admin test', async ({ loggedInPage }) => {

  await loggedInPage.locator(
    'span:has-text("Admin")'
  ).click();

});