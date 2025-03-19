/**
 * Playwright test utilities for common E2E testing operations
 * 
 * @module PlaywrightTestUtils
 * @since 1.0.0
 */

import { Page, expect } from '@playwright/test';

/**
 * Logs in a user using the application's authentication flow
 * 
 * @param page - The Playwright Page object
 * @param username - Username for login
 * @param password - Password for login
 */
export async function login(page: Page, username: string, password: string): Promise<void> {
  await page.goto('/login');
  await page.getByLabel('Username').fill(username);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  
  // Verify successful login
  await expect(page).toHaveURL(/\/dashboard/);
}

/**
 * Navigates to a specific feature or page and verifies the URL
 * 
 * @param page - The Playwright Page object
 * @param path - The path to navigate to
 * @param expectedUrlPattern - Expected URL pattern after navigation
 */
export async function navigateTo(
  page: Page, 
  path: string, 
  expectedUrlPattern: RegExp
): Promise<void> {
  await page.goto(path);
  await expect(page).toHaveURL(expectedUrlPattern);
} 