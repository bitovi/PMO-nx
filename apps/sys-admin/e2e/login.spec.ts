import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Name').fill('ilyass');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard\/restaurant-list/);
  // Verify restaurant table exists and has rows
  const restaurantTable = page.locator('table');
  await expect(restaurantTable).toBeVisible();

  // Check that there are restaurant rows
  const tableRows = restaurantTable.locator('tbody tr');
  const count = await tableRows.count();
  expect(count).toBeGreaterThan(200);
});
