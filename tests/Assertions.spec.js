const{test,expect}=require('@playwright/test')
test('AssertionTest',async({page})=>{

//open url
    await page.goto('https://demo.nopcommerce.com/register')

    //expect(page).toHaveUrl()  page has url

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //2 expect(page).toHaveTitle() page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //3 expect(locator).toBeVisible()
    const logo= await page.locator("//div[@class='header-logo']")
    await expect(logo).toBeVisible()

    //4 expect(locator).toBeEnabled()   control is enabled
    
    const searchStoreBox= await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled()


    //5expect loator to be checed
    //radio button
    await page.locator

    //5 expect (locator)  #NewsLetterSubscriptions_0__IsActive
     

})