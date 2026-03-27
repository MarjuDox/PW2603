import { expect, type Locator, type Page } from '@playwright/test';

export class HyperlinkPage {
  readonly page: Page;
  readonly statusCode200: Locator;
  readonly statusCode301: Locator;
  readonly statusCode404: Locator;
  readonly statusCode500: Locator;
  readonly hereLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.statusCode200 = page.getByRole('link', { name: '200' });
    this.statusCode301 = page.getByRole('link', { name: '301' });
    this.statusCode404 = page.getByRole('link', { name: '404' });
    this.statusCode500 = page.getByRole('link', { name: '500' });
    this.hereLink = page.getByRole('link', { name: 'here' });
  }

  async navigate() {
    await this.page.goto('/status_codes');
  }

  async clickStatusCodes(statusCode: string) {
    if (statusCode === '200') {
      await this.statusCode200.click();
      try {
        await expect(this.page).toHaveURL('/status_codes/200');
      } catch (error) {
        console.error(`Error occurred while navigating to status code 200: ${error}`);
      }
      await this.hereLink.click();
    } else if (statusCode === '301') {
      await this.statusCode301.click();
      try {
        await expect(this.page).toHaveURL('/status_codes/301');
      } catch (error) {
        console.error(`Error occurred while navigating to status code 301: ${error}`);
      }
      await this.hereLink.click();
    } else if (statusCode === '404') {
      await this.statusCode404.click();
      try {
        await expect(this.page).toHaveURL('/status_codes/404');
      } catch (error) {
        console.error(`Error occurred while navigating to status code 404: ${error}`);
      }
      await this.hereLink.click();
    } else if (statusCode === '500') {
      await this.statusCode500.click();
      try {
        await expect(this.page).toHaveURL('/status_codes/500');
      } catch (error) {
        console.error(`Error occurred while navigating to status code 500: ${error}`);
      }
      await this.hereLink.click();
    }
  }

}