import{test,expect}from '@playwright/test';
import { Loginpage } from '../pages/Loginpage';
import { Homepage } from '../pages/homepage';
import { cartpage } from '../pages/cartpage';
import { Logoutpage } from '../pages/Logout';


test('test', async ({ page })=>{

    //login using pom

    const login =new Loginpage(page);
    await login.gotoLoginpage();
    await login.login('pavonol','test@123');
    await page.waitForTimeout(1000)
    await login.loginbutton;
    await page.waitForTimeout(1000)
    

    


//home
const home=new Homepage(page);
await home.addproductTocart("Nexus 6")
await page.waitForTimeout(3000)
await home.gotocart();



//cart
const cart=new cartpage(page);
await page.waitForTimeout(3000)
const status=await cart.checkproductincart('Nexus 6')
expect(await status).toBe(true);

//delete in cart
await page.waitForTimeout(2000);
await cart.deleteincart;

//logout
const logout=new Logoutpage(page);
await page.waitForTimeout(3000)
await logout.logoutlink();

});
