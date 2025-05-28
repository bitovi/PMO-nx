import { test, expect } from '@playwright/test';
import { testUtil } from '../src/app/test-util';

test('demo', async ({ page }) => {
  await page.goto('/');

  expect(4).toBe(testUtil());
});
