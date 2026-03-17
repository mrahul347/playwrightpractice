const { test,expect }=require('@playwright/test');

test('Builtin',async({page})=>{
    //await page.goto('https://app.8storage.com');
    //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),timeout: 60_000,waitUntil: "load"

await page.goto(
  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  {
    timeout: 60_000,        // 60 seconds
    waitUntil: "load"       // wait until full page load
  }
);

    const logo=await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button', {type: 'submit'} ).click(),
     
    //const name=await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()
     
    await expect(await page.getByText('manda user')).toBeVisible()




});
