class PluginInstallPage {
  constructor(page) {
    this.page = page;
    this.pluginsMenu = page.locator('//a[@class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-plugins"]//div[@class="wp-menu-name"]');
    this.addNewPluginButton = page.locator('//a[@class="page-title-action"]');
    this.newPluginsearchField = page.locator('//input[@id="search-plugins"]');
    this.installButton = page.locator('//a[@aria-label="Install WP Dark Mode – WordPress Dark Mode Plugin for Improved Accessibility, Dark Theme, Night Mode, and Social Sharing 5.1.0 now"]');
    this.installedPluginsLink = page.locator('//a[normalize-space()="Installed Plugins"]');
    this.pluginSearchField = page.locator('//input[@id="plugin-search-input"]');
    this.activateButton = page.locator('//a[@id="activate-wp-dark-mode"]');
  }

  async goToPluginsPage() {
    await this.pluginsMenu.click();
  }

  async searchAndInstallPlugin(pluginName) {
    await this.addNewPluginButton.click();
    await this.newPluginsearchField.fill("WP Dark Mode");
    // await this.newPluginsearchField.press('Enter');
    await this.installButton.click();
  }

  async activatePlugin(pluginName) {
    await this.goToPluginsPage();
    await this.installedPluginsLink.click();
    await this.pluginSearchField.fill("WP Dark Mode");
    await this.pluginSearchField.press('Enter');
    await this.activateButton.click();
  }
}

module.exports = { PluginInstallPage };
