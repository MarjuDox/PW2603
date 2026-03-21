import { test, expect } from '@playwright/test';


test('nested frames - access inner frames', async ({ page }) => {
  // The-internet example page with nested frames
await page.goto('/nested_frames');

const parentTopFrame = page.frameLocator('frame[name="frame-top"]').locator(`html`);
// Access the middle frame (child of top frame)
  // Access the left frame (sibling of middle)
  const left = parentTopFrame.frameLocator('frame[name="frame-left"]');
  await expect(left.locator('body')).toHaveText('LEFT');

  const middle = parentTopFrame.frameLocator('frame[name="frame-middle"]');
  await expect(middle.locator('#content')).toHaveText('MIDDLE');

  const right = parentTopFrame.frameLocator('frame[name="frame-right"]');
  await expect(right.locator('body')).toHaveText('RIGHT');

const parentBottomFrame = page.frameLocator('frame[name="frame-bottom"]').locator(`html`);
// Access the bottom frame (different top-level frame)
  await expect(parentBottomFrame.locator('body')).toHaveText('BOTTOM');
});