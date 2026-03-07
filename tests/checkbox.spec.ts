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

test('checkbox using CSS locators', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  await page.locator('#checkboxes').getByRole('checkbox').first().check();
  await page.locator('#checkboxes').getByRole('checkbox').first().uncheck();
  await page.locator('#checkboxes').getByRole('checkbox').nth(1).uncheck();
  await page.locator('#checkboxes').getByRole('checkbox').nth(1).check();
  await expect(page.locator('#checkboxes')).toContainText('checkbox 1 checkbox 2');
});

test('checkbox using XPath locators', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  await page.locator('//input[@type]="checkbox")').fill('checkbox 1');
  await page.locator('//input[@type]="checkbox")').nth(1).uncheck();
  await page.locator('//input[@type]="checkbox")').nth(1).check();
  await expect(page.locator('//input[@type]="checkbox")')).toContainText('checkbox 1 checkbox 2');
});