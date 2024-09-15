const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { WPDarkModePage } = require('../pages/Navigate_to_the_WP_Dark_Mode');

test.describe('WP Dark Mode Navigation Test', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('admin', 'root'); 
  });

  test('Navigate to WP Dark Mode settings', async ({ page }) => {

    const wpDarkModePage = new WPDarkModePage(page);
    await wpDarkModePage.navigateToWPDarkModeSettings();
    
  });
});
