import { test, expect } from '@playwright/test';

test('homepage highlights the technology stack', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page.getByRole('heading', { name: 'Technologies I use to ship products' })).toBeVisible();
  await expect(page.getByText('Web experiences', { exact: true })).toBeVisible();
  await expect(page.getByText('APIs & data', { exact: true })).toBeVisible();
});
