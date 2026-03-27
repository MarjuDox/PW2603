import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly flashMessage: Locator;
  readonly welcomeMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = this.page.locator('#username');
    this.passwordInput = this.page.locator('#password');
    this.submitButton = this.page.locator('button[type="submit"]');
    this.flashMessage = this.page.locator('#flash');
    this.welcomeMessage = this.page.locator('.subheader');
  }

  async navigate() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('button[type="submit"]');
  }

  async getFlashMessage(){
    return this.page.locator('#flash');
  }
  
  async getWelcomeMessage() {
    return this.page.locator('.subheader');
  }
}