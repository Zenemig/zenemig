import { test, expect } from '@playwright/test';

test('home page shows welcome message', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Welcome to Zenemig')).toBeVisible();
});

test('theme toggle button works', async ({ page }) => {
  await page.goto('/');
  const button = page.getByRole('button', { name: /Toggle .* Mode/ });
  
  const initialText = await button.textContent();
  await button.click();
  const newText = await button.textContent();
  
  expect(newText).not.toBe(initialText);
}); 