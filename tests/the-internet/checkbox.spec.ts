import { test, expect } from './fixtures/the-internet.fixture';
// 
// Role locators
test('test', async ({ checkboxPage }) => {
  await checkboxPage.navigate();
  await checkboxPage.checkbox1.check();
  await checkboxPage.checkbox1.uncheck();
  await checkboxPage.checkbox2.uncheck();
  await checkboxPage.checkbox2.check();
  await expect(checkboxPage.checkbox).toContainText('checkbox 1 checkbox 2');
});


// // CSS locators
// test('checkbox using CSS locators', async ({ page }) => {
//   await page.goto('/checkboxes');
//   await page.locator('#checkboxes').getByRole('checkbox').first().check();
//   await page.locator('#checkboxes').getByRole('checkbox').first().uncheck();
//   await page.locator('#checkboxes').getByRole('checkbox').nth(1).uncheck();
//   await page.locator('#checkboxes').getByRole('checkbox').nth(1).check();
//   await expect(page.locator('#checkboxes')).toContainText('checkbox 1 checkbox 2');
// });


// // XPath locators
// test('checkbox using XPath locators', async ({ page }) => {
//   await page.goto('/checkboxes');

//   const checkboxes = page.locator('//input[@type="checkbox"]');

//   await checkboxes.first().check();
//   await expect(checkboxes.first()).toBeChecked();

//   await checkboxes.nth(1).uncheck();
//   await expect(checkboxes.nth(1)).not.toBeChecked();
// });

// // Xpath locators with attribute
// test('verify able to check the checkbox', async ({page}) =>{
//     await page.goto('/checkboxes')

//     await page.getByRole('checkbox').first().check(); // access by role locator
//     await page.locator("#checkboxes input:nth-child(1)").check(); //css locator string ==> unique locator
//     await page.locator("//*[@id='checkboxes']/input[1]").check(); //xpath
//     await page.locator("//*[@id='checkboxes']/input[1]").isChecked(); //xpath

//     expect(await page.getByRole('checkbox').first()).toBeChecked();

//     await page.getByRole('checkbox').nth(1).check();
//     expect(await page.getByRole('checkbox').nth(1)).toBeChecked();
// });