const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { AnimationEffectPage } = require('../pages/Change_The_Animation_Effect');

test.describe('“Enable Page-Transition Animation” & Change the Animation Effect Test', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('admin', 'root');
  });

  test('From Customization → Site Animation → “Enable Page-Transition Animation” & change the Animation Effect from the default selections.', async ({ page }) => {
    const animationEffectPage = new AnimationEffectPage(page);
    await animationEffectPage.navigateToAnimationSettings();
    await animationEffectPage.changeAnimationEffect(); // Change the animation effect
    await animationEffectPage.saveChanges();
    await animationEffectPage.verifyChangesSaved();
  });
});
