import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shelfproductmanagement--qa.sandbox.my.salesforce.com/');
  await page.getByLabel('Username').fill('petro.bodnarchuk@shelf.io.qa');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('ymw_zvf5YUE8dyd-dvh');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.goto('https://shelfproductmanagement--qa.sandbox.lightning.force.com/lightning/o/UserAppMenuItem/home');
  await page.getByRole('button', { name: 'Shelf Assist 3' }).click();
  await page.frameLocator('iframe').locator('form').click();
  await page.frameLocator('iframe').getByTestId('email-input').fill('petro.bodnarchuk+90@shelf.io');
  await page.frameLocator('iframe').getByTestId('login-button').click();
  await page.frameLocator('iframe').getByTestId('password-input').fill('byw8uau0ukq!YZV*emp');
  await page.frameLocator('iframe').getByTestId('login-button').click();
  await page.frameLocator('iframe').getByRole('list').first().click();
  await page.frameLocator('iframe').getByTestId('icon-profile-settings').click();
});