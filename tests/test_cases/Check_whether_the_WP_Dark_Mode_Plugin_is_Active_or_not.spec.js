const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { PluginPage } = require('../pages/Check_whether_the_WP_Dark_Mode_Plugin_is_Active_or_not');

let loginPage;
let pluginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  pluginPage = new PluginPage(page);
  await loginPage.login('admin', 'root');

});

test('Check whether WP Dark Mode Plugin is active or not', async ({ page }) => {

  await pluginPage.gotoPluginsPage();
  await pluginPage.searchPlugin('WP Dark Mode');
  
});
