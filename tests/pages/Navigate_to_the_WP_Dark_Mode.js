const { expect } = require('@playwright/test');

class WPDarkModePage {
  constructor(page) {
    this.page = page;
    this.wpDarkModeHeader = page.locator('h1:has-text("WP Dark Mode")');
  }

  async navigateToWPDarkModeSettings() {
    await this.page.goto('http://localhost/wordpress/wp-admin/admin.php?page=wp-dark-mode-get-started');    // Navigate to the WP Dark Mode settings page

  }
}

module.exports = { WPDarkModePage };
