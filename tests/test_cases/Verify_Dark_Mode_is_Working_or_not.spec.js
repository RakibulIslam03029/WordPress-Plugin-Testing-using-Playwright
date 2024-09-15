const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { DarkModePage } = require('../pages/Verify_Dark_Mode_is_Working_or_not');

test('Validate whether the dark mode is working or not on the Admin Dashboard.', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const darkModePage = new DarkModePage(page);

  await loginPage.login('admin', 'root');
  await darkModePage.enableDarkMode();
  await darkModePage.verifyDarkModeEnabled();

});
