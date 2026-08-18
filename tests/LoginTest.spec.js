import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
// import dotenv from 'dotenv';
import {loginCreds,invalidLoginCreds} from '../testData/loginData'

let loginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto("/login") 
})

test("Validate valid login with correct username and password", async ({ page }) => {
    await loginPage.userLogin(loginCreds.username, loginCreds.password)
    await expect(page).toHaveURL("/");
})

test("Validate login with incorrect username and password", async ({ page }) => {
    await loginPage.userLogin(invalidLoginCreds.username,invalidLoginCreds.password)
    await expect(page).toHaveURL("/login");
    await loginPage.assertLoginError();
})

test("Validate login with empty username and password", async ({ page }) => {
    await loginPage.userLogin("", "")
    await expect(page).toHaveURL("/login");
    await expect(loginPage.emptyEmailErrorMsg).toBeVisible();
    await expect(loginPage.emptyPasswordErrorMsg).toBeVisible();
})