import {Given, When,  Then} from '@cucumber/cucumber';
import {page} from './hooks';
import {expect} from '@playwright/test';
import {ProductsPage} from '../../pages/ProductsPage';


Given('I am on the products page', async function() {
    const productsPage = new ProductsPage(page);
    await productsPage.goToProductsPage();
})

Then('I should see the products list', async function() {
    const productPage = new ProductsPage(page);
    await expect(productPage.getFirstProduct()).toBeVisible();
})

When("I search {string} on the search bar", async function(word) {
    const productsPage = new ProductsPage(page);
    await productsPage.searchProduct(word);
})

Then("I should see products that contain {string}", async function(word) {
    const productsPage = new ProductsPage(page);
    const products =  (await productsPage.getProductsList()).every(product => product.toLowerCase().includes(word));
    expect(products).toBe(true);
})