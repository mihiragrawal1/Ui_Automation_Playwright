import { test, expect } from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import {EventPage} from '../pages/EventPage'
import {loginCreds} from '../testData/loginData'

let loginPage;
let eventPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    eventPage = new EventPage(page);
    await page.goto("/login")
})

test.only("Verify successfull navigation to events page when clciked on Event button from Navbar",async ({page})=>{
    await loginPage.userLogin(loginCreds.username , loginCreds.password)
    await eventPage.goToEventsPage();
    await expect(page).toHaveURL(/\/events/);
    await expect(eventPage.createEventButton.first()).toBeVisible();

})