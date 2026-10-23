const { test } = require('./fixture.js');

test('Dashboard test', async ({ loggedInPage }) => {

  await loggedInPage.locator(
    'span:has-text("PIM")'
  ).click();

});