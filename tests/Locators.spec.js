const {test, expect} =require('@playwright/test')

test('Locators',async({page})=>{
await page.goto("https://demoblaze.com/index.html");

//click on login button
//await page.locator('id=login2').click()

await page.click('id=login2')

//provide username -css
//await page.locator('#loginusername').fill("pavanol")
await page.fill('#loginusername','pavanol')
//await page.type('#loginusername','pavanol')
//provide password
await page.fill("input[id='loginpassword']",'test@123')

//click on login button
await page.click("//button[normalize-space()='Log in']")

//verify logout link present
const logoutlink=await page.locator("//a[normalize-space()='Log out']")
await expect(logoutlink).toBeVisible();
//tests\Screenshots
await page.screenshot({ path:'tests/Screenshots/'+Date.now()+'Homepage.png'})
await page.close()






});