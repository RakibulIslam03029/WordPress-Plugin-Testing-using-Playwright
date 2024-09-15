const { expect } = require('@playwright/test');

class AnimationEffectPage {
  constructor(page) {
    this.page = page;
    this.wpDarkModeLink = page.getByRole('link', { name: 'WP Dark Mode' });
    this.customizationButton = page.locator('//h4[normalize-space()="Customization"]');
    this.siteAnimationLink = page.getByRole('link', { name: 'Site Animation' });
    this.pageTransitionToggle = page.locator('label div').nth(1);
    this.animationEffectSelection = page.locator('.rounded > div:nth-child(3) > .flex');
    this.saveChangesButton = page.getByRole('button', { name: 'Save Changes' });
    this.successMessage = page.getByText('Saved Successfully');
  }

  async navigateToAnimationSettings() {
    await this.wpDarkModeLink.click();
    await this.customizationButton.click();
    await this.siteAnimationLink.click();
  }

  async changeAnimationEffect() {
    await this.pageTransitionToggle.click();
    await this.animationEffectSelection.click();
  }

  async saveChanges() {
    await this.saveChangesButton.click();
  }

  async verifyChangesSaved() {
    await expect(this.successMessage).toBeVisible();
  }
}

module.exports = { AnimationEffectPage };
