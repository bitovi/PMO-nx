import { test, expect } from '@playwright/test';

test('can add and remove a new restaurant', async ({ page }) => {
  // Navigate to restaurant list page
  await page.goto('/dashboard/restaurant-list/');

  // Verify initial restaurant table has 10 rows
  const initialTable = page.locator('table');
  await expect(initialTable).toBeVisible();
  const initialRows = initialTable.locator('tbody tr');
  await expect(initialRows).toHaveCount(10);
  // Click add restaurant button
  await page.getByText('Add Restaurant', { exact: true }).click();

  // Fill in restaurant details
  await page.getByLabel('Restaurant Name').fill('Test Restaurant');
  await page.getByLabel('Restaurant Slug').fill('test-restaurant');
  await page.getByLabel('Street').fill('123 Test Street');
  await page.getByLabel('City').fill('Mountain View');
  await page.getByLabel('State').fill('CA');
  await page.getByLabel('Zip Code').fill('94043');

  // Submit the form
  await page.getByRole('button', { name: 'Save' }).click();

  // Verify new restaurant appears in table
  const restaurantTable = page.locator('table');
  await expect(restaurantTable).toBeVisible();

  // Find and verify the new restaurant row
  const newRestaurantRow = restaurantTable.locator('tbody tr', {
    has: page.getByText('Test Restaurant'),
  });
  await expect(newRestaurantRow).toBeVisible();
  await expect(newRestaurantRow.getByText('Test Restaurant')).toBeVisible();
  await expect(newRestaurantRow.getByText('Mountain View')).toBeVisible();

  // Click delete button for Test Restaurant
  await newRestaurantRow.getByRole('button', { name: 'Delete' }).click();

  // Verify Test Restaurant is no longer in table
  await expect(newRestaurantRow).toBeHidden();

  // Verify final restaurant table has 10 rows
  const finalTable = page.locator('table');
  await expect(finalTable).toBeVisible();
  const finalRows = finalTable.locator('tbody tr');
  await expect(finalRows).toHaveCount(10);
});
