import {When, Then} from '@cucumber/cucumber';
import {page} from './hooks';
import {expect} from '@playwright/test';


let firstProductName: string = "";


When("I add the first product to the cart", async function() {
    firstProductName = (await page.locator(".single-products p").first().textContent())!;
    await page.locator(".add-to-cart").first().click();
    await page.getByText("Added!").waitFor();
    await page.goto("https://automationexercise.com/view_cart");
})

Then("I should see the first product visible in the cart", async function() {
    await expect(page.getByText(firstProductName)).toBeVisible();
})


