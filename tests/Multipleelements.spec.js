const { test,expect } =require('@playwright/test');

test('multipleelements',async({page})=>{
    await page.goto('https://demoblaze.com/index.html')
   /* const links=await page.$$('a');
    for(const link of links)
    {
        const linktext=await link.textContent();
        console.log(linktext);
    }*/


       

//page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
/*const products=await page.$$("//div[@id='tbodyid']//div//h4/a")
for(const product of products)
{
    //await products.first().waitFor();
    const productsname= await products.textContent();
    console.log(productsname);
}*/

/*const products = page.locator("//div[@id='tbodyid']//div//h4/a");

await products.first().waitFor();   // wait until first product appears

const productNames = await products.allTextContents();
console.log(productNames);
*/

await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
const products = await page.$$("//div[@id='tbodyid']//div//h4/a");
for (const product of products)
 {

  const name = await product.textContent();
  console.log(name);
}
//const productNames = await page.locator("//div[@id='tbodyid']//h4/a").allTextContents();
//console.log(productNames);


});