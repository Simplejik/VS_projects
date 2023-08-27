const { test, expect} = require ('@playwright/test');
const { timeout } = require('../../playwright.config');

test('iFrame',async({page}) => {  
    await page.goto('https://shelfproductmanagement--qa.sandbox.lightning.force.com/'); // Відкриття сторінки з iframe

    await page.getByLabel('Username').click();
    await page.locator('input#username').fill('petro.bodnarchuk@shelf.io.qa');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('teb4yjw8PQT*pgw4cfn');
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    
   // await expect(page).toHaveURL('https://shelfproductmanagement--qa.sandbox.lightning.force.com/lightning/page/home');
   await page.waitForTimeout(4000); 
   await expect(page).toHaveURL('https://shelfproductmanagement--qa.sandbox.lightning.force.com/lightning/_classic/%2Fapp%2Fmgmt%2Fapplauncher%2FappLauncher.apexp');
   await page.waitForTimeout(5000);
   await page.locator("li:nth-of-type(1) > .flexipageComponent  .bare.slds-button.slds-truncate.slds-utility-bar__action.uiButton > .itemTitle.slds-truncate");
   //await frame.locator(".login-block.login-block--main-login.login-block--with-google");
   await page.click('li:nth-of-type(1) > .flexipageComponent  .bare.slds-button.slds-truncate.slds-utility-bar__action.uiButton > .itemTitle.slds-truncate');
   const locator = page.frameLocator('div#app > .main-wrapper');

 // await expect(frameLocator('.login-block.login-block--main-login.login-block--with-google')).toBeVisible();

   //await page.click('li:nth-of-type(1) > .flexipageComponent  .bare.slds-button.slds-truncate.slds-utility-bar__action.uiButton > .itemTitle.slds-truncate');
  //  const iframe = page.frame('iframe-selector'); // Вибір фрейму за допомогою селектора
  //  await iframe.click('button'); // Клік на елемент усередині фрейму`
  });



/*const { test, expect} = require ('@playwright/test');
const { timeout } = require('../playwright.config');

test('SF login', async({page}) => {
  await page.goto('https://shelfproductmanagement--qa.sandbox.my.salesforce.com');
  await page.getByLabel('Username').click();

  await page.locator("input#username").fill('petro.bodnarchuk@shelf.io.qa');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('ymw_zvf5YUE8dyd-dvh');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
 await page.waitForTimeout(3000); 
 await expect(page).toHaveURL('https://shelfproductmanagement--qa.sandbox.lightning.force.com/lightning/_classic/%2Fapp%2Fmgmt%2Fapplauncher%2FappLauncher.apexp');
 await page.waitForTimeout(3000);

 await page.screenshot({path: '.test-results/screen.png', fullPage: True});
});*/
