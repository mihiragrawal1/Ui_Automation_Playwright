import { expect } from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import {EventPage} from '../pages/EventPage'
import {loginCreds} from '../testData/loginData'
import{test} from '../fixtures/login.fixture'

let loginPage;
let eventPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    eventPage = new EventPage(page);
    await page.goto("/login")
})

test("Verify successfull navigation to events page when clicked on Event button from Navbar",async ({page,loggedInSession})=>{
    // await loginPage.userLogin(loginCreds.username , loginCreds.password) //removed this because we are using custom fixture here which takes care of login
    await eventPage.goToEventsPage();
    await expect(loggedInSession).toHaveURL(/\/events/);
    await expect(eventPage.createEventButton.first()).toBeVisible();

})

test("Verify when user clicks on add new event, user is navigated to add new event page and form is displayed ", async ({page,loggedInSession})=>{
    // await loginPage.userLogin(loginCreds.username , loginCreds.password) //removed this because we are using custom fixture here which takes care of login
    await eventPage.goToEventsPage();
    await expect(loggedInSession).toHaveURL(/\/events/);
    await expect(eventPage.createEventButton.first()).toBeVisible();
    await eventPage.addNewEvent();
    await expect(loggedInSession).toHaveURL(/\/admin\/events/);

})