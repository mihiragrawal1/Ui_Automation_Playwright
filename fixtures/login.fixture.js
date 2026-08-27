import{test as base} from '@playwright/test'
import{LoginPage} from '../pages/LoginPage'
import{loginCreds} from '../testData/loginData'


export const test = base.extend({

    loggedInSession: async({page},use)=>{
        const loginpage = new LoginPage(page);
        await loginpage.userLogin(loginCreds.username,loginCreds.password);
        await use(page);
    }

})
