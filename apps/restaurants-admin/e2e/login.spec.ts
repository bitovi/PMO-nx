import { test, expect } from '@playwright/test';

test('restaurant admin login flow', async ({ page }) => {
  // Navigate to the login page
  await page.goto('/');

  // Verify we're on the login page
  const loginTitle = page.locator('mat-card-title');
  await expect(loginTitle).toContainText('Login');

  // Fill the restaurant name
  await page.getByLabel('Restaurant Name:').fill('Spice Palace');

  // Submit the login form
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify redirection to the dashboard
  await expect(page).toHaveURL(/dashboard/);

  // Verify the restaurant name is displayed in the header
  const restaurantName = page.locator('h1');
  await expect(restaurantName).toContainText(
    'Orders for Spice Palace Restaurant',
  );
});
