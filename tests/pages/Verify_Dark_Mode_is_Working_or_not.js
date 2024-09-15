const { expect } = require('@playwright/test');

class DarkModePage {
  constructor(page) {
    this.page = page;
    this.darkModeToggle = page.getByText('Dark', { exact: true });
    this.bodyElement = page.locator('body'); // Use 'body' to capture a screenshot
  }

  async enableDarkMode() {
    await this.darkModeToggle.click(); 
  }

  async verifyDarkModeEnabled() {
    await this.bodyElement.screenshot({ path: 'tests/screenshots/dark-mode-enabled.png' });
  }  
}

module.exports = { DarkModePage };
