import { test, expect } from '@playwright/test';

test('checkbox', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  await page.getByRole('checkbox').first().check();
  await page.getByRole('checkbox').first().uncheck();
  await page.getByRole('checkbox').nth(1).uncheck();
  await page.getByRole('checkbox').nth(1).check();
});
