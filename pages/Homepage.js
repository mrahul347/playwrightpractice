exports.Homepage=class Homepage{

constructor(page)
{
    this.page=page;
    this.productlist='//*[@id="tbodyid"]//div//div//div/h4/a';
    this.addTocartbtn='//a[normalize-space()="Add to cart"]';
    this.cart='#cartur'
}
async addproductTocart(productname){
    const productlist=await this.page.$$(this.productlist);
    for (const product of productlist) {
        if (productname === await product.textContent()){
            await product.click()
            break;
        }

    }
    await this.page.on('dialog', async dialog=>{
        if(dialog.message().includes('added')){
            await dialog.accept();
        }
    })
    await this.page.locator(this.addTocartbtn).click();
}
    async gotocart(){
        await this.page.locator(this.cart).click();
    }
};