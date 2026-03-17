exports.cartpage = class cartpage{

    constructor(page){
        this.page=page;
        this.noofproducts= '//tbody[@id="tbodyid"]/tr/td[2]'
        this.deleteincart="//a[text()='Delete']"
    }
    async checkproductincart(productname){
        const productincart=await this.page.$$(this.noofproducts)
        for (const product of productincart){
            console.log(await product.textContent())
            if(productname ===await product.textContent()){
                return true;
                break;
            }
        }
    }
    
        async deleteincart(){
        await this.page.locator(this.deleteincart).click();
    }
    
}