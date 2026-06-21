import { test, expect } from '@playwright/test';

test.describe('Portfolio Tests', () => {
  test('homepage has title and hero section', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Mfon Francis/);
    
    // Expect the hero section to be visible
    const heroHeading = page.locator('h1', { hasText: /Mfon Francis/ });
    await expect(heroHeading).toBeVisible();
  });

  test('projects page displays projects and filters work', async ({ page }) => {
    await page.goto('http://localhost:3000/projects');
    
    // Check if the All Projects heading is visible
    await expect(page.locator('h1', { hasText: 'All Projects' })).toBeVisible();
    
    // Check for a specific filter tab, e.g. "Web"
    const webFilter = page.locator('button', { hasText: 'Web' });
    if (await webFilter.count() > 0) {
        await webFilter.click();
        // Just verify clicking doesn't crash the page and filter activates
        await expect(webFilter).toHaveClass(/text-white/);
    }
  });

  test('navigation works', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    
    // Click on Projects in nav
    const projectsLink = page.getByRole('link', { name: 'Projects' }).first();
    await projectsLink.click();
    
    await expect(page).toHaveURL(/.*\/projects/);
  });
});
