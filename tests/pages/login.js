const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.getByLabel('Username or Email Address');
    this.passwordField = page.getByLabel('Password', { exact: true });
    this.rememberMeCheckbox = page.getByLabel('Remember Me');
    this.loginButton = page.getByRole('button', { name: 'Log In' });
  }

  async goto() {
    await this.page.goto('http://localhost/wordpress/wp-login.php?loggedout=true&wp_lang=en_US');
  }

  async login(username, password) {
    await this.goto();
    await expect(this.usernameField).toBeVisible();
    await this.usernameField.fill(username);
    await expect(this.passwordField).toBeVisible();
    await this.passwordField.fill(password);
    await expect(this.rememberMeCheckbox).toBeVisible();
    await this.rememberMeCheckbox.check();
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };
