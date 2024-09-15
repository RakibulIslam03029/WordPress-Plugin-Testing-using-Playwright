const { expect } = require('@playwright/test');

class DarkModeValidationPage {
  constructor(page) {
    this.page = page;
    this.frontend = page.locator('//a[normalize-space()="rakibul islam"]')
    this.darkModeToggle = page.locator('.wp-dark-mode-switch'); 
    this.bodyElement = page.locator('body');
  }

  async goToFrontend() {
    await this.frontend.click();
  }

  async toggleDarkMode() {
    await this.darkModeToggle.click();
  }

  async captureScreenshot() {
    await this.bodyElement.screenshot({ path: 'tests/screenshots/frontend-dark-mode-enabled.png' });
  }
}

module.exports = { DarkModeValidationPage };
