import { test, expect } from '@playwright/test';

test('verify dropdown', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    await page.locator('#dropdown').click();
    await page.locator(`//select[@id='dropdown']`).selectOption('1');
    await expect(page.locator('#dropdown')).toContainText('Option 1');
});