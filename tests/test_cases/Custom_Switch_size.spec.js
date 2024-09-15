const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { CustomSwitchSizePage } = require('../pages/Custom_Switch_size');

test.describe('Custom Switch Size Test', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('admin', 'root'); 
  });

  test('From Customization → Switch Settings → Switch Customization - Select Custom Switch size & Scale it to 220.', async ({ page }) => {
    const customSwitchSizePage = new CustomSwitchSizePage(page);
    await customSwitchSizePage.navigateToWPDarkModeSettings();
    await customSwitchSizePage.selectCustomSwitchSize(); // Select the Custom Switch size (XL)
    await customSwitchSizePage.saveChanges();
    await customSwitchSizePage.verifyChangesSaved();
  });
});
