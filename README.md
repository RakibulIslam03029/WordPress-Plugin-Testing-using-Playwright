
# WordPress Plugin Testing using Playwright

This project provides automated tests for WordPress using [Playwright](https://playwright.dev/), a powerful end-to-end testing framework. The tests verify key functionalities such as login, installing and activating the WP Dark Mode plugin, enabling Admin Panel Dark Mode, confirming that Dark Mode is working and customization settings. The purpose is to ensure that the plugin performs properly and meets the requirements.

The project follows the **Page Object Model (POM)** pattern, promoting clean, maintainable, and scalable test code.
## Prerequisites

* Node.js v21.0.0
* Playwright
* WordPress
* XAMPP
## Installation

Install my-project with npm
1. Clone the repository:
```bash
  https://github.com/RakibulIslam03029/WordPress-Plugin-Testing-using-Playwright.git

```
2. Install dependencies:
```bash
npm install

```
3. Install Playwright browsers:
```bash
npx playwright install

```
## Running Tests

To execute the tests, use the following command:

  * npm run CheckAllFunctionality (you can run all test scenarios using this command)
  * npm run CheckLogin
  * npm run CheckPluginPage
  * npm run InstallAndActivePlugin
  * npm run AdminPanelDarkMode
  * npm run VerifyDarkModeisWorking
  * npm run NavigateWPDarkMode
  * npm run FloatingSwitchStyle
  * npm run CustomSwitchSize
  * npm run FloatingSwitchPosition
  * npm run DisableKeyboardShortcut
  * npm run ChangeAnimationEffect
  * npm run DarkModeOnFrontend
  


