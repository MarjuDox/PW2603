import { test as base } from '@playwright/test';
import { ToDoPage } from '../pages/toDo.page';

type ToDoFixtures = {
    toDo: ToDoPage;
};

export const test = base.extend<ToDoFixtures>({
  toDo: async ({ page }, use) => {
    const toDo = new ToDoPage(page);
    await use(toDo);
  }
});

export { expect } from '@playwright/test';
