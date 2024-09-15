const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login');  

let loginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.login('admin', 'root');
});

test('Log in to your WordPress site.', async ({ page }) => {
  
  await expect(page).toHaveURL('http://localhost/wordpress/wp-admin/');   // Validate that the URL is correct after login
});
