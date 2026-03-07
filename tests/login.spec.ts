import { test, expect } from '@playwright/test';

test('login success', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome to the Secure Area. When you are done click logout below.' })).toBeVisible();
});

test('login success using CSS locators', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.locator('#username').fill('tomsmith'); // 
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.locator('button[type="submit"]').click();
  await expect(page.locator('h2')).toHaveText('Secure Area');
  await expect(page.locator('.subheader')).toContainText('Welcome to the Secure Area');
});

test('login success using XPath locators', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.locator('//input[@id="username"]').fill('tomsmith'); //tìm tag + attribute
  await page.locator('//*[@id="password"]').fill('SuperSecretPassword!'); // tìm tất cả các tag có attribute id = password
  await page.locator('//button[@type="submit"]').click();
  await expect(page.locator('//h2')).toHaveText('Secure Area');
  await expect(page.locator('//h4[@class="subheader"]')).toContainText('Welcome to the Secure Area');
});
