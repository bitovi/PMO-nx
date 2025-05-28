import { test, expect } from '@playwright/test';

test('can navigate to my-orders-history and fill email input', async ({
  page,
}) => {
  // Navigate to the my-orders-history page
  await page.goto('/my-orders-history');

  // Find the email input field and fill it
  const emailInput = await page.locator('input[type="email"]');
  await expect(emailInput).toBeVisible();
  await emailInput.fill('test@tst');

  // Optional: Verify the email was entered correctly
  await expect(emailInput).toHaveValue('test@tst');
});
