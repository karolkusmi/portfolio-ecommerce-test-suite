import {Given, When, Then} from '@cucumber/cucumber';
import {page} from './hooks';
import {expect} from '@playwright/test';
import {ProductsPage} from '../../pages/ProductsPage';
import {ProductDetailsPage} from '../../pages/ProductDetailsPage';
import {CartPage} from '../../pages/CartPage';


When("I click on the first product view product", async function() {
    const productsPage = new ProductsPage(page);
    this.firstProductName = await productsPage.getFirstProductName();
    await productsPage.goToFirstProductDetails();
})

Then("I should see the first product name", async function() {
    const productDetailsPage = new ProductDetailsPage(page);
    await expect(productDetailsPage.getProductName()).toHaveText(this.firstProductName);
})

Then("I should see product {string}", async function(field: string) {
    const productDetailsPage = new ProductDetailsPage(page);
    await expect(productDetailsPage.getFieldValue(field)).toBeVisible();
})

When("I select the quantity of three", async function() {
    const productDetailsPage = new ProductDetailsPage(page);
    await productDetailsPage.fillQuantity("3");

})

When("I click add to cart", async function() {
    const productDetailsPage = new ProductDetailsPage(page);
    await productDetailsPage.clickAddToCart();
})

Then("I should see that the quantity of the first product is three", async function() {
    const cartPage = new CartPage(page);
    await expect(cartPage.getQuantityCell(this.firstProductName)).toHaveText("3");
})