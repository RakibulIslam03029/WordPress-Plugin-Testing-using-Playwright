const { expect } = require('@playwright/test');

class FloatingSwitchStylePage {
  constructor(page) {
    this.page = page;
    this.wpDarkModeLink = page.getByRole('link', { name: 'WP Dark Mode' });
    this.customizationButton = page.locator('//h4[normalize-space()="Customization"]');
    this.switchSettingsLink = page.getByRole('link', { name: 'Switch Settings' });
    this.floatingSwitchText = page.getByText('Floating Switch', { exact: true });
    this.switchStyleOption = page.locator('.rounded > div:nth-child(2) > div:nth-child(3)').first();
    this.saveChangesButton = page.getByRole('button', { name: 'Save Changes' });
    this.successMessage = page.getByText('Saved Successfully');
  }

  async navigateToWPDarkModeSettings() {
    await this.wpDarkModeLink.click();
    await this.customizationButton.click();
    await this.switchSettingsLink.click();
  }

  async selectFloatingSwitchStyle() {
    await this.floatingSwitchText.click();
    await this.switchStyleOption.click();
  }

  async saveChanges() {
    await this.saveChangesButton.click();
  }

  async verifyChangesSaved() {
    await expect(this.successMessage).toBeVisible();
  }
}

module.exports = { FloatingSwitchStylePage };
