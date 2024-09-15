const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { FloatingSwitchStylePage } = require('../pages/Floating_Switch_Style');

test.describe('Floating Switch Style Test', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('admin', 'root');
  });

  test('From Customization → Switch Settings → Change the “Floating Switch Style” from the default selections', async ({ page }) => {
    const floatingSwitchStylePage = new FloatingSwitchStylePage(page);

    await floatingSwitchStylePage.navigateToWPDarkModeSettings();
    await floatingSwitchStylePage.selectFloatingSwitchStyle();
    await floatingSwitchStylePage.saveChanges();
    await floatingSwitchStylePage.verifyChangesSaved(); // Verify changes were saved successfully
  });
});
