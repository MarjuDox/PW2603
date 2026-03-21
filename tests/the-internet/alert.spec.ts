import { test, expect } from '@playwright/test';

 //Note: 
    // 1. Hàm page.on() sẽ lắng nghe sự kiện 'dialog' và tự động chấp nhận (accept) bất kỳ dialog nào xuất hiện trong quá trình thực thi test.
    //    * Điều này có nghĩa là khi một alert, confirm, hoặc prompt xuất hiện, nó sẽ được tự động chấp nhận mà không cần phải viết mã xử lý riêng cho từng loại dialog.
    //    * Điều này giúp đơn giản hóa việc xử lý các dialog trong quá trình test, đặc biệt khi bạn chỉ quan tâm đến việc chấp nhận chúng mà không cần kiểm tra nội dung hoặc thực hiện các hành động khác.
    // 2. Hàm page.once() sẽ lắng nghe sự kiện 'dialog' chỉ một lần duy nhất. Khi sự kiện này xảy ra lần đầu tiên, callback function sẽ được thực thi và sau đó sẽ ngừng lắng nghe các sự kiện 'dialog' tiếp theo.
    //    * Điều này có nghĩa là nếu có nhiều dialog xuất hiện trong quá trình test, chỉ dialog đầu tiên sẽ được xử lý bởi callback function, và các dialog sau đó sẽ không được tự động chấp nhận.
    //    * Điều này hữu ích khi bạn muốn kiểm tra hoặc xử lý một dialog cụ thể mà bạn biết sẽ xuất hiện trong quá trình test, và không muốn tự động chấp nhận tất cả các dialog khác.

test('verify the JS alert', async ({ page }) => {
  // The-internet example page with nested frames
await page.goto('/javascript_alerts');
    // Click the button to trigger the alert 
     page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toBe('I am a JS Alert');
      await dialog.accept();
    });
    await page.click('text=Click for JS Alert');
    // Verify the result text after accepting the alert
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
});

test('verify the JS confirm - in case: clicking on Yes', async ({ page }) => {
  // The-internet example page with nested frames
await page.goto('/javascript_alerts');
    // Click the button to trigger the confirm dialog
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm');
      expect(dialog.message()).toBe('I am a JS Confirm');
      await dialog.accept(); // click "Ok"
    });
    await page.click('text=Click for JS Confirm');
    // Verify the result text after accepting the confirm dialog
    await expect(page.locator('#result')).toHaveText('You clicked: Ok')
})

test('verify the JS confirm - in case: clicking on Cancel', async ({ page }) => {
  // The-internet example page with nested frames
await page.goto('/javascript_alerts');
    // Click the button to trigger the confirm dialog
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm');
      expect(dialog.message()).toBe('I am a JS Confirm');
      await dialog.dismiss(); // click "Cancel"
    });
    await page.click('text=Click for JS Confirm');
    // Verify the result text after accepting the confirm dialog
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel')
})

test('verify the JS prompt - in case: clicking on Ok', async ({ page }) => {
  const inputText = 'inputTest';
  // The-internet example page with nested frames
await page.goto('/javascript_alerts');
    // Click the button to trigger the confirm dialog
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('prompt');
      expect(dialog.message()).toBe('I am a JS prompt');
      await dialog.accept(inputText); // click "Ok" and input "Test" into the prompt
    });
    await page.click('text=Click for JS Prompt');
    // Verify the result text after accepting the prompt dialog
    await expect(page.locator('#result')).toHaveText(`You entered: ${inputText}`)
})

test('verify the JS prompt - in case: clicking on Cancel', async ({ page }) => {
  const inputText = 'inputTest';
  // The-internet example page with nested frames
await page.goto('/javascript_alerts');
    // Click the button to trigger the confirm dialog
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('prompt');
      expect(dialog.message()).toBe('I am a JS prompt');
      await dialog.dismiss(); // click "Cancel"
    });
    await page.click('text=Click for JS Prompt');
    // Verify the result text after dismissing the prompt dialog
    await expect(page.locator('#result')).toHaveText('You entered: null')
})