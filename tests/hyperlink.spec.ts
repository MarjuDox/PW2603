import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/status_codes');
  
  await page.getByRole('link', {name: '200'}).click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes/200');

  await page.locator(`a[href="/status_codes"]`).click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes')

  await page.locator(`//a[normalize-space()='301']`).click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes/301');

  await page.locator(`a[href="/status_codes"]`).click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes')

  await page.getByRole('link', {name: '404'}).click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes/404');

  await page.getByRole('link', {name: 'here'}).click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes');

  await page.locator(`a[href="status_codes/500"]`).click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes/500');

  await page.locator(`a[href="/status_codes"]`).click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes')

});


test('status codes links navigate correctly', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    // Open the Status Codes page
    await page.getByRole('link', { name: 'Status Codes' }).click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes');
    const codes = ['200', '301', '404', '500'];
    for (const code of codes) {
      // Go to the specific status code page
      await page.getByRole('link', { name: code }).click();
      await expect(page).toHaveURL(`https://the-internet.herokuapp.com/status_codes/${code}`);
      // Use the "here" link to go back to the list
      await page.getByRole('link', { name: 'here' }).click();
      await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes');
    }
  });