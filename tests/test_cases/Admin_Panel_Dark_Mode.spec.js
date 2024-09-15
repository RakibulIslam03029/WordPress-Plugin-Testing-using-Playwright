const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { AdminPanelDarkModePage } = require('../pages/Admin_Panel_Dark_Mode');

test.describe('Enable Admin Panel Dark Mode', () => {
  let loginPage;
  let adminPanelDarkModePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    adminPanelDarkModePage = new AdminPanelDarkModePage(page);

    await loginPage.login('admin', 'root');
  });

  test('Enable Admin Dashboard Dark Mode from Controls → Admin Panel Dark Mode.', async ({ page }) => {
    await adminPanelDarkModePage.goToAdminPanelDarkMode();
    await adminPanelDarkModePage.enableAdminDashboardDarkMode();    // Enable Admin Panel Dark Mode and save changes
  });
});
