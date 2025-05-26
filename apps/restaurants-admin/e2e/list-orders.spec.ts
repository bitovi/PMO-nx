import { test, expect } from '@playwright/test';

test('restaurant admin can view orders list', async ({ page }) => {
  // Login first
  await page.goto('/auth');
  await page.getByLabel('Restaurant Name:').fill('Spice Palace');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify redirection to the dashboard with orders
  await expect(page).toHaveURL(/dashboard/);

  // Wait for the orders table to be visible
  const ordersTable = page.locator('table.orders-table');
  await expect(ordersTable).toBeVisible();

  // Verify order table has columns
  const tableHeaders = page.locator('th.cdk-header-cell');
  await expect(tableHeaders).toHaveCount(5); // Assuming 4 columns: Customer, Order Details, Total, Status
  await expect(tableHeaders.nth(0)).toContainText('Customer');
  await expect(tableHeaders.nth(1)).toContainText('Order Details');
  await expect(tableHeaders.nth(2)).toContainText('Total');
  await expect(tableHeaders.nth(3)).toContainText('Status');

  // Check that there are order rows
  const tableRows = ordersTable.locator('tbody tr');
  const count = await tableRows.count();
  expect(count).toBeGreaterThan(0);

  // Verify order contents
  const firstOrderCustomerName = tableRows
    .first()
    .locator('.customer-column span')
    .first();
  await expect(firstOrderCustomerName).not.toBeEmpty();

  // Check order total price is visible
  const totalPrice = tableRows.first().locator('.total-price');
  await expect(totalPrice).toBeVisible();

  // Verify order status chips are present
  const statusChip = tableRows.first().locator('mat-chip');
  await expect(statusChip).toBeVisible();
});
