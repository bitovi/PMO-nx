import { test, expect } from '@playwright/test';

test('Restaurants page has a table of restaurants', async ({ page }) => {
  // Navigate to the home page
  await page.goto('/restaurants-list');

  const matCardHeader = await page.locator('mat-card-header').first();
  await expect(matCardHeader).toBeVisible();
  await expect(matCardHeader).toHaveText('Spice PalaceNew York, NY');
});
