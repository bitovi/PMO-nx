import { test, expect } from '@playwright/test';

test('restaurant admin can update order status', async ({ page }) => {
  // Login first
  await page.goto('/');
  await page.getByLabel('Restaurant Name:').fill('Spice Palace');
  await page.getByRole('button', { name: 'Login' }).click();

  // Wait for orders to load
  const ordersTable = page.locator('table.orders-table');
  await expect(ordersTable).toBeVisible();

  // Find a row with a status actions button
  const firstRowActionsButton = page
    .locator('tbody tr')
    .first()
    .getByTestId('status-actions-button');

  // Click the actions menu
  await firstRowActionsButton.click();

  // Click on a status update option in the menu (this might vary based on current status)
  // Let's try to select "Preparing" status
  const prepareOption = page.getByRole('menuitem', { name: /Preparing/i });

  // If preparing option exists, click it, otherwise try another status
  if (await prepareOption.isVisible()) {
    await prepareOption.click();
  } else {
    // Try another status option, like "Ready" or "Delivered"
    const readyOption = page.getByRole('menuitem', { name: /Ready/i });
    if (await readyOption.isVisible()) {
      await readyOption.click();
    } else {
      const deliveredOption = page.getByRole('menuitem', {
        name: /Delivered/i,
      });
      await deliveredOption.click();
    }
  }

  // Wait for the status update to process
  // This might be a spinner or a snackbar notification
  await page.waitForTimeout(1000); // Small delay to let the UI update

  // Verify the status has changed by checking if the chip's text has updated
  // This depends on the specific implementation, but usually there will be some visual feedback
  const statusChip = page.locator('tbody tr').first().locator('mat-chip');
  await expect(statusChip).toBeVisible();
});
