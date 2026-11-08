import { expect, test } from '@playwright/test';

test('page has the correct title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Swag Labs');
});
