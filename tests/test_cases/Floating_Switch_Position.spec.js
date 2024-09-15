const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { FloatingSwitchPositionPage } = require('../pages/Floating_Switch_Position');

test.describe('Floating Switch Position Left Test', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('admin', 'root'); 
  });

  test('From Customization → Switch Settings - Change the Floating Switch Position (Left).', async ({ page }) => {
    const floatingSwitchPositionPage = new FloatingSwitchPositionPage(page);

    await floatingSwitchPositionPage.navigateToWPDarkModeSettings();
    await floatingSwitchPositionPage.selectFloatingSwitchPositionLeft();
    await floatingSwitchPositionPage.saveChanges();
    await floatingSwitchPositionPage.verifyChangesSaved();
  });
});
