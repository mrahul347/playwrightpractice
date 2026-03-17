const { test, expect } = require('@playwright/test');

test('Home page',async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    const pageTitle= await page.title();
    console.log('pageTitle is:',pageTitle);
    await expect(page).toHaveTitle('STORE');

    const pageURL=page.url();

    console.log('pageUrl is:',pageURL);
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
    await page.close();






});