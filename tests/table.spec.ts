import { test, expect } from '@playwright/test';

test('get and log table data', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/tables');
  
});