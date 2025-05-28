import { test, expect } from '@playwright/test';

test('homepage has the correct title', async ({ page }) => {
  // Navigate to the home page
  await page.goto('/');

  const titleElement = await page.locator('h1').first();
  await expect(titleElement).toBeVisible();
  await expect(titleElement).toHaveText('Ordering food has never been easier');
});
