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

When("I add the first product to the cart twice", async function() {
    firstProductName = (await page.locator(".single-products p").first().textContent())!;
    await page.locator(".add-to-cart").first().click();
    await page.getByText("Added!").waitFor();
    await page.goto("https://automationexercise.com/view_cart");
    await page.goto("https://automationexercise.com/products");
    await page.locator(".add-to-cart").first().click();
    await page.getByText("Added!").waitFor();
    await page.goto("https://automationexercise.com/view_cart");
})

Then("I should see that the quantity of the product is two", async function() {
    await expect(page.locator("tr", {hasText: firstProductName}).locator(".cart_quantity")).toHaveText("2");
})

