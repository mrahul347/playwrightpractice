import{test,expect} from '@playwright/test';

let page;
test.beforeEach(async({browser})=>{
page=await browser.newPage();
await page.goto('https://demoblaze.com/index.html')
//login
await page.locator('#login2').click()
await page.locator('#loginusername').fill('pavanol')
await page.locator('#loginpassword').fill('test@123')
await page.locator('//button[normalize-space()="Log in"]').click()
})
test.afterEach(async()=>{
 await page.locator('#logout2').click()   
})

test('homepage test',async({})=>{
    //homepage
await page.waitForSelector('.hrefch');
const products=await  page.$$('.hrefch')
expect(products).toHaveLength(9)
});
test('addcart test',async({})=>{
//homepage
await page.locator('//a[text()="Samsung galaxy s6"]').click()
await page.locator('//a[text()="Add to cart"]').click()
page.on('dailog',async dialog=>{
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
})
});