import {expect} from "@playwright/test"


export class LoginPage{

    

    constructor(page){
        this.page = page;
        this.username=page.locator("#email");
        this.password=page.locator("#password");
        this.signInButton=page.locator("#login-btn");
        this.loginError=page.locator('[class="text-sm font-medium flex-1 leading-snug"]');
        this.emptyPasswordErrorMsg= page.getByText('Password must be at least 6 characters')
        this.emptyEmailErrorMsg= page.getByText('Enter a valid email');

    }

    async userLogin(username, password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
    }

    async assertLoginError (){
        await expect(this.loginError).toBeVisible();
        await expect(this.loginError).toHaveText('Invalid email or password');
    }


}