import { test, expect } from '@playwright/test';

test('verify dropdown', async ({ page }) => {
    await page.goto('/dropdown');
    await page.locator('#dropdown').selectOption({ label: 'Option 1' });
    await expect(page.locator('#dropdown')).toContainText('Option 1');
});