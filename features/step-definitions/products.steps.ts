import {Given, When,  Then} from '@cucumber/cucumber';
import {page} from './hooks';
import {expect} from '@playwright/test';

Given('I am on the products page', async function() {
    await page.goto("https://automationexercise.com/products", {waitUntil: 'domcontentloaded'});
})

Then('I should see the products list', async function() {
    await expect(page.locator(".single-products").first()).toBeVisible();
})

When("I search {string} on the search bar", async function(word) {
    await page.getByPlaceholder("Search Product").fill(word);
    await page.locator("#submit_search").click();
})

Then("I should see products that contain {string}", async function(word) {
    const productsList = await page.locator(".single-products p").allTextContents();
    const products =  productsList.every(product => product.toLowerCase().includes(word));
    expect(products).toBe(true);
})