const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { PluginInstallPage } = require('../pages/Install_the_Plugin_and_Activate_it');

test.describe('WP Dark Mode Plugin Management', () => {
  let loginPage;
  let pluginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    pluginPage = new PluginInstallPage(page);

    await loginPage.login('admin', 'root');
  });

  test('should install the WP Dark Mode plugin', async () => {
    await pluginPage.goToPluginsPage();
    await pluginPage.searchAndInstallPlugin('WP Dark Mode');
    
  });

  test('should activate the WP Dark Mode plugin', async () => {
    await pluginPage.activatePlugin('WP Dark Mode');
  });
});
