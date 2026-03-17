exports.Loginpage =class Loginpage{

    constructor(page)
    {
        this.page = page;
        this.loginLink = "#login2"
        this.usernameInput = '#loginusername';
        this.passwordInput = '#loginpassword';
        //this.loginbutton = 'button:has-text("Log in")';
        this.loginbutton = '//button[normalize-space()="Log in"]';
    }

        async gotoLoginpage(){
            await this.page.goto('https://www.demoblaze.com/index.html');
        }

        async login(username, password)
        {
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginbutton).click();
        }




};
