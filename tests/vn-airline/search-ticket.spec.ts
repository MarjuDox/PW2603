import { test, expect } from '@playwright/test';

test.use({
  // 🔥 Tắt luôn location popup
  permissions: ['geolocation'],
  geolocation: { latitude: 10.7769, longitude: 106.7009 },
});

test.skip('Verify từ: SGN đến là HAN, ngày đi là 25/3/2026, ngày về là 31/3/2026', async ({ page , context}) => {
    
await context.clearCookies();

await context.addInitScript(() => {
  localStorage.clear();
  sessionStorage.clear();
});

await page.goto('https://www.vietnamairlines.com');

    // Click mở dropdown "Chọn điểm đi"
    await page.getByRole('button', { name: 'Chọn điểm đi' }).click();
    // 👉 Tìm input hiện ra
    const input = page.locator('input[placeholder*="Điểm đi"]').first();
    await input.waitFor({ state: 'visible' });
    // 👉 Nhập SGN
    await input.fill('SGN');
    // 👉 Chờ option render
    const option = page.locator('text=SGN - Ho Chi Minh City').first();
    await option.waitFor({ state: 'visible' });
    // 👉 Click chọn
    await option.click();

    // Select destination city
    await page.getByRole('button', { name: 'Chọn điểm đến' }).click();
    const destinationCityInput = page.frameLocator('#destination-city').locator('text=HAN - Hanoi');
    await destinationCityInput.click();

    // Select departure date
    await page.click('#departure-date');
    await page.click('text=25/3/2026');

    // Select return date
    await page.click('#return-date');
    await page.click('text=31/3/2026');

    // Click search button
    await page.click('#search-flights');

    // Validate search results (this is a placeholder, adjust as needed)
    const resultsText = await page.textContent('.search-results');
    expect(resultsText).toContain('SGN');
    expect(resultsText).toContain('HAN');
    expect(resultsText).toContain('25/3/2026');
    expect(resultsText).toContain('31/3/2026');
});