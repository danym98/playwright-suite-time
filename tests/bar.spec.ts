import { test, expect } from '@playwright/test';

test.describe("bar start", () => {
  test.beforeAll(async () => {
    await delay(5000);
  });

  test.afterAll(async () => {
    await delay(2500);
  });

  test('bar test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
  });
  
});

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}