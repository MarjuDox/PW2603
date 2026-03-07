import { test, expect } from '@playwright/test';
// 
// Role locators
test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  await page.getByRole('checkbox').first().check();
  await page.getByRole('checkbox').first().uncheck();
  await page.getByRole('checkbox').nth(1).uncheck();
  await page.getByRole('checkbox').nth(1).check();
  await expect(page.locator('#checkboxes')).toContainText('checkbox 1 checkbox 2');
});


// CSS locators
test('checkbox using CSS locators', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  await page.locator('#checkboxes').getByRole('checkbox').first().check();
  await page.locator('#checkboxes').getByRole('checkbox').first().uncheck();
  await page.locator('#checkboxes').getByRole('checkbox').nth(1).uncheck();
  await page.locator('#checkboxes').getByRole('checkbox').nth(1).check();
  await expect(page.locator('#checkboxes')).toContainText('checkbox 1 checkbox 2');
});


// Xpath locators
test('checkbox using XPath locators', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  await page.locator('//input[@type]="checkbox")').fill('checkbox 1');
  await page.locator('//input[@type]="checkbox")').nth(1).uncheck();
  await page.locator('//input[@type]="checkbox")').nth(1).check();
  await expect(page.locator('//input[@type]="checkbox")')).toContainText('checkbox 1 checkbox 2');
});

// Xpath locators with attribute
test('verify able to check the checkbox', async ({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/checkboxes')

    await page.getByRole('checkbox').first().check(); // access by role locator
    await page.locator("#checkboxes input:nth-child(1)").check(); //css locator string ==> unique locator
    await page.locator("//*[@id='checkboxes']/input[1]").check(); //xpath
    await page.locator("//*[@id='checkboxes']/input[1]").isChecked(); //xpath

    expect(await page.getByRole('checkbox').first()).toBeChecked();

    await page.getByRole('checkbox').nth(1).check();
    expect(await page.getByRole('checkbox').nth(1)).toBeChecked();
});