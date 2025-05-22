import { test, expect } from '@playwright/test';
import { AppRouteTypes } from '../src/app/app.routes';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(await page.locator('p').innerText()).toContain('PmoHome works!');
});

test('can navigate to restaurants list', async ({ page }) => {
  await page.goto(AppRouteTypes.RESTAURANTS_LIST);

  // Expect the URL to contain the path for the restaurants list.
  await expect(page).toHaveURL(/.*restaurants-list/);

  // Expect h1 to contain a substring.
  expect(await page.locator('p').innerText()).toContain(
    'PmoRestaurantsList works!',
  );
});
