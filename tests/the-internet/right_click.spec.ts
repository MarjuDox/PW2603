import { test, expect } from '@playwright/test';

test('right click context menu', async ({ page }) => {
    await page.goto('/context_menu');
    
    const target = page.locator('#hot-spot');
    // Ensure element is ready
    await expect(target).toBeVisible();
    // Handle alert triggered by right click
    const [dialog] = await Promise.all([
        page.waitForEvent('dialog'),
        target.click({ button: 'right' })
    ]);
  // Validate alert
  await expect(dialog.message()).toContain('You selected a context menu');
  // Accept alert
  await dialog.accept();
});