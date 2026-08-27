import { Given, When, Then, Before } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import playwright from "playwright"
import { LoginPage } from '../pages/LoginPage.js'


//  let loginPage;
//  let browser;
//  let context;
//  let page;

// Before(async function () {                         //added in hook.js file
//   // runs before each Cucumber scenario
//    browser = await playwright.chromium.launch();
//    context = await browser.newContext({
//     baseURL: 'https://eventhub.rahulshettyacademy.com'
//    });
//    page = await context.newPage();
//    loginPage = new LoginPage(page);
    
// });


Given('User is on Login page of application',async function () {
  // Write code here that turns the phrase above into concrete actions
  await this.page.goto('/');
});

When('User enters {string} and {string}', async function (username, password) {
  // Write code here that turns the phrase above into concrete actions
  await this.loginPage.userLogin(username, password)
});

Then('User should be taken to application main page', async function () {
  // Write code here that turns the phrase above into concrete actions
      await expect(this.page).toHaveURL("/");

});

Then('User should not be able to login and should get error for invalid credentials',async function () {
  // Write code here that turns the phrase above into concrete actions
   await expect(this.page).toHaveURL("/login");
   await this.loginPage.assertLoginError();
});

