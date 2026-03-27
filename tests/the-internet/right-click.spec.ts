import { test, expect } from './fixtures/the-internet.fixture';

test('right click context menu', async ({ rightClickPage }) => {
  await rightClickPage.navigate();
  const dialogPromise = rightClickPage.getMessage();

  await rightClickPage.rightClick();
  const message = await dialogPromise;
  expect(message).toBe('You selected a context menu');
});