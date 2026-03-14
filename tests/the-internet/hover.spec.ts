import {test, expect} from '@playwright/test';

test('Hover test', async ({ page }) => {
  // Go to the dropdown page
  await page.goto('/hovers');

  await page.locator('div .figure').first().hover();
  await expect(page.getByText('name: user1')).toBeVisible();
  
});