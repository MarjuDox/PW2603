import { test, expect } from '@playwright/test';

test('checkbox', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  await page.getByRole('checkbox').first().check();
  await page.getByRole('checkbox').first().uncheck();
  await page.getByRole('checkbox').nth(1).uncheck();
  await page.getByRole('checkbox').nth(1).check();
});

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  await page.getByRole('checkbox').first().check();
  await page.getByRole('checkbox').first().uncheck();
  await page.getByRole('checkbox').nth(1).uncheck();
  await page.getByRole('checkbox').nth(1).check();
  await expect(page.locator('#checkboxes')).toContainText('checkbox 1 checkbox 2');
});
