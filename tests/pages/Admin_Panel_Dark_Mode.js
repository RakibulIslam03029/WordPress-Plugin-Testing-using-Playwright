const { expect } = require('@playwright/test');

class AdminPanelDarkModePage {
    constructor(page) {
      this.page = page;
      this.wpDarkModeLink = page.getByRole('link', { name: 'WP Dark Mode' });
      this.adminPanelDarkModeLink = page.getByRole('link', { name: 'Admin Panel Dark Mode' });
      this.enableAdminDashboardDarkToggle = page.locator('(//div[@class="relative w-10 h-full rounded-full transition duration-100 bg-slate-200"])[1]');
      this.saveChangesButton = page.getByRole('button', { name: 'Save Changes' });
      this.successMessage = page.getByText('Saved Successfully');
    }
  
    async goToAdminPanelDarkMode() {
      await this.wpDarkModeLink.click();
      await this.adminPanelDarkModeLink.click();
    }
  
    async enableAdminDashboardDarkMode() {
      await expect(this.page.getByText('Enable Admin Dashboard Dark')).toBeVisible();
      await this.enableAdminDashboardDarkToggle.click();
      await this.saveChangesButton.click();
      await expect(this.successMessage).toBeVisible();
    }
  }
  
  module.exports = { AdminPanelDarkModePage };
  