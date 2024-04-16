import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('http://localhost:3000/');
  
  await page.locator('input[name="email"]').fill('demo@demo.demo');
  await page.locator('input[name="password"]').fill('demo@demo.demo');

  // await page.getByLabel('Email').fill('demo@demo.demo');
  // await page.getByLabel('Password').fill('demo@demo.demo');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  // await page.waitForURL('https://github.com/');
  
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});