const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { DarkModeValidationPage } = require('../pages/Validate-Dark_Mode_on_Frontend');

test.describe('Validate Dark Mode on Frontend', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('admin', 'root'); 
  });

  test('Enable and validate dark mode on the frontend', async ({ page }) => {
    const darkModeValidationPage = new DarkModeValidationPage(page);
    await darkModeValidationPage.goToFrontend();    // Go to the frontend
    await darkModeValidationPage.toggleDarkMode();
    await darkModeValidationPage.captureScreenshot();
  });
});
