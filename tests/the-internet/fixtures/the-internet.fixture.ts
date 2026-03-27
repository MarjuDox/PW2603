import {test as base} from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { CheckboxPage } from '../pages/checkbox.page';
import { HyperlinkPage } from '../pages/hyperlink.page';
import { RightClickPage } from '../pages/right-click.page';

type TheInternetFixtures = {
    loginPage: LoginPage;
    checkboxPage: CheckboxPage;
    hyperlinkPage: HyperlinkPage;
    rightClickPage: RightClickPage;
};

export const test = base.extend<TheInternetFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  checkboxPage: async ({ page }, use) => {
    const checkboxPage = new CheckboxPage(page);
    await use(checkboxPage);
  },

  hyperlinkPage: async ({ page}, use) => {
    const hyperlinkPage = new HyperlinkPage(page);
    await use(hyperlinkPage);
  },

  rightClickPage: async ({ page }, use) => {
    const rightClickPage = new RightClickPage(page);
    await use(rightClickPage);
  }
});

export {expect} from '@playwright/test';
