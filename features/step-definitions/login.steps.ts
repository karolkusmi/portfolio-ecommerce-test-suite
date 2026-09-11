import {Given, When, Then} from '@cucumber/cucumber';
import {page} from './hooks';
import {expect} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';

Given("I am on the login page", async function() {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
})

When("I log in with valid credentials", async function() {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    if(!email || !password) {
        throw new Error("Email or password is not defined in the environment variables");
    }
    const loginPage = new LoginPage(page);
    await loginPage.login(email, password);
})

Then("I should see the home page", async function(){
    await expect(page.getByText("Logged in as")).toBeVisible();
})

When("I log in with invalid credentials", async function(){
    const loginPage = new LoginPage(page);
    await loginPage.login("pepe@hotmail.com","hola123");

})

Then("I should see an error message", async function() {
    await expect(page.getByText("Your email or password is incorrect!")).toBeVisible();
})