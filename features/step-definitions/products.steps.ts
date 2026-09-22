import {Given, When,  Then} from '@cucumber/cucumber';
import {page} from './hooks';
import {expect} from '@playwright/test';

Given('I am on the products page', async function() {
    await page.goto("https://automationexercise.com/products", {waitUntil: 'domcontentloaded'});
})

Then('I should see the products list', async function() {
    await expect(page.locator(".single-products").first()).toBeVisible();
})