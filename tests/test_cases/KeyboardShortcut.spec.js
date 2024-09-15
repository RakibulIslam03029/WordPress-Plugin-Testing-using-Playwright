const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { KeyboardShortcutPage } = require('../pages/KeyboardShortcut');

test.describe('Keyboard Shortcut Settings Test', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('admin', 'root'); 
  });

  test('Disable the Keyboard Shortcut from the Accessibility Settings.', async ({ page }) => {
    const keyboardShortcutPage = new KeyboardShortcutPage(page);

    await keyboardShortcutPage.navigateToKeyboardShortcutSettings();
    await keyboardShortcutPage.disableKeyboardShortcut();    // Disable Keyboard Shortcut
    await keyboardShortcutPage.saveChanges();
    await keyboardShortcutPage.verifyChangesSaved();
  });
});
