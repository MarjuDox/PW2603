import { test, expect } from './fixtures/the-internet.fixture';

test('login success', async ({ loginPage }) => {
  await loginPage.navigate();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  await expect(await loginPage.getFlashMessage()).toContainText('You logged into a secure area!');
  await expect(await loginPage.getWelcomeMessage()).toContainText('Welcome to the Secure Area. When you are done click logout below.');
});
 
// test('login success using CSS locators', async ({ page }) => {
//   await page.goto('/login');
//   await page.locator('#username').fill('tomsmith'); // 
//   await page.locator('#password').fill('SuperSecretPassword!');
//   await page.locator('button[type="submit"]').click();
//   await expect(page.locator('h2')).toHaveText('Secure Area');
//   await expect(page.locator('.subheader')).toContainText('Welcome to the Secure Area');
// });

// test('login success using XPath locators', async ({ page }) => {
//   await page.goto('/login');
//   await page.locator('//input[@id="username"]').fill('tomsmith'); //tìm tag + attribute
//   await page.locator('//*[@id="password"]').fill('SuperSecretPassword!'); // tìm tất cả các tag có attribute id = password
//   await page.locator('//button[@type="submit"]').click();
//   await expect(page.locator('//h2')).toHaveText('Secure Area');
//   await expect(page.locator('//h4[@class="subheader"]')).toContainText('Welcome to the Secure Area');
// });
