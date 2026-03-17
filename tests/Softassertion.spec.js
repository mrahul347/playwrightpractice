const{test,expect}=require('@playwright/test')

test("Softassertions",async({page})=>{

await page.goto("https://www.demoblaze.com/index.html")

//hard assertions=it means if error occurs it will not go to next
/*await expect(page).toHaveTitle('STORE');
await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
await expect(page.locator('.navbar-brand')).toBeVisible();*/

//soft asertions if error occcurs it will go to next step
await expect.soft(page).toHaveTitle('STORE123');
await expect.soft(page).toHaveURL("https://www.demoblaze.com/index.html");
await expect.soft(page.locator('.navbar-brand')).toBeVisible();



})