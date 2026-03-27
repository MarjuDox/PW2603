import { test, expect } from './fixtures/the-internet.fixture';

// Normally step 
test('status codes links navigate correctly', async ({ hyperlinkPage }) => {
  await hyperlinkPage.navigate();
  const statuses = ['200', '301', '404', '500'];
  for (const status of statuses) {
    await hyperlinkPage.clickStatusCodes(status);
    expect(await hyperlinkPage.navigate());
  }

});

// // Enhance the clean code using array
// test('status codes links navigate correctly', async ({ page }) => {
//     await page.goto('/status_codes');
//     // Open the Status Codes page
//     await page.getByRole('link', { name: 'Status Codes' }).click();
//     await expect(page).toHaveURL('/status_codes');
//     const codes = ['200', '301', '404', '500'];
//     for (const code of codes) {
//       // Go to the specific status code page
//       await page.getByRole('link', { name: code }).click();
//       await expect(page).toHaveURL(`/status_codes/${code}`);
//       // Use the "here" link to go back to the list
//       await page.getByRole('link', { name: 'here' }).click();
//       await expect(page).toHaveURL('/status_codes');
//     }
//   });