exports.Logoutpage = class Logoutpage{


    constructor(page){
        this.page=page;
        this.logoutSelector='#logout2';

    }
    async logoutlink(){
        await this.page.locator(this.logoutSelector).click();
    }

};