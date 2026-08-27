import { Before } from "@cucumber/cucumber";
import {LoginPage} from "../pages/LoginPage.js"
import playwright from "playwright"


// let loginPage;
//  let browser;
//  let context;
//  let page;

Before(async function () {

  // runs before each Cucumber scenario
   this.browser = await playwright.chromium.launch();
   this.context = await this.browser.newContext({
    baseURL: 'https://eventhub.rahulshettyacademy.com'
   });
   this.page = await this.context.newPage();
   this.loginPage = new LoginPage(this.page);

    
});