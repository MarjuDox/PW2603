import { expect, type Locator, type Page } from '@playwright/test';

export class RightClickPage {
  readonly page: Page;
  readonly target: Locator;

  constructor(page: Page) {
    this.page = page;
    this.target = this.page.locator('#hot-spot');
  }

  async navigate() {
    await this.page.goto('/context_menu');
  }

  async rightClick() {
    await this.target.click({ button: 'right' });
  }
  async getMessage(){
      return new Promise<string>((resolve) => {
      this.page.once('dialog', async (dialog) => {
        const message = dialog.message();
        await dialog.accept();
        resolve(message);
      });
    });
  }
}