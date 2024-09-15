const { expect } = require('@playwright/test');

class KeyboardShortcutPage {
  constructor(page) {
    this.page = page;
    this.wpDarkModeLink = page.getByRole('link', { name: 'WP Dark Mode' });
    this.advancedButton = page.locator('//h4[normalize-space()="Advanced"]')
    this.accessibilityLink = page.getByRole('link', { name: 'Accessibility' });
    this.keyboardShortcutToggle = page.locator('label:has-text("Keyboard Shortcut") span');
    this.saveChangesButton = page.getByRole('button', { name: 'Save Changes' });
    this.successMessage = page.getByText('Saved Successfully');
  }

  async navigateToKeyboardShortcutSettings() {
    await this.wpDarkModeLink.click();
    await this.advancedButton.click();
    await this.accessibilityLink.click();
  }

  async disableKeyboardShortcut() {
    await this.keyboardShortcutToggle.click();
  }

  async saveChanges() {
    await this.saveChangesButton.click();
  }

  async verifyChangesSaved() {
    await expect(this.successMessage).toBeVisible();
  }
}

module.exports = { KeyboardShortcutPage };
