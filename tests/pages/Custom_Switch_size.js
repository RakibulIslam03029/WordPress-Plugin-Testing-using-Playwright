const { expect } = require('@playwright/test');

class CustomSwitchSizePage {
  constructor(page) {
    this.page = page;
    this.wpDarkModeLink = page.getByRole('link', { name: 'WP Dark Mode' });
    this.customizationButton = page.locator('//h4[normalize-space()="Customization"]');
    this.switchSettingsLink = page.getByRole('link', { name: 'Switch Settings' });
    this.customSizeOption = page.locator('div').filter({ hasText: /^XL$/ });
    this.saveChangesButton = page.getByRole('button', { name: 'Save Changes' });
    this.successMessage = page.getByText('Saved Successfully');
  }

  async navigateToWPDarkModeSettings() {
    await this.wpDarkModeLink.click();
    await this.customizationButton.click();
    await this.switchSettingsLink.click();
  }

  async selectCustomSwitchSize() {
    await this.customSizeOption.click();
  }

  async saveChanges() {
    await this.saveChangesButton.click();
  }

  async verifyChangesSaved() {
    await expect(this.successMessage).toBeVisible();
  }
}

module.exports = { CustomSwitchSizePage };
