const { expect } = require('@playwright/test');

class PluginPage {
  constructor(page) {
    this.page = page;
    this.pluginsMenu = page.locator('//a[@class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-plugins"]//div[@class="wp-menu-name"]');
    this.pluginSearchField = page.getByLabel('Search installed plugins');
  }

  async gotoPluginsPage() {
    await this.pluginsMenu.click();
  }

  async searchPlugin(pluginName) {
    await expect(this.pluginSearchField).toBeVisible();
    await this.pluginSearchField.click();
    await this.pluginSearchField.fill(pluginName);
    await this.pluginSearchField.press('Enter');
  }
}

module.exports = { PluginPage };
