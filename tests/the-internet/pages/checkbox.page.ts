import { expect, type Locator, type Page } from '@playwright/test';

export class CheckboxPage {
  readonly page: Page;
  readonly checkbox: Locator;
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkbox = page.locator('#checkboxes');
    this.checkbox1 = page.locator('#checkboxes input[type="checkbox"]').nth(0);
    this.checkbox2 = page.locator('#checkboxes input[type="checkbox"]').nth(1);
  }
  
  async navigate() {
    await this.page.goto('/checkboxes');
  }

}