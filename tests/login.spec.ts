import { test, expect } from '@playwright/test';

test('login success', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  
  
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome to the Secure Area. When you are done click logout below.' })).toBeVisible();
});