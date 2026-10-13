import {When, Then} from '@cucumber/cucumber';
import {page} from './hooks';
import {expect} from '@playwright/test';
import {CartPage} from '../../pages/CartPage';
import {ProductsPage} from '../../pages/ProductsPage';
import {CustomWorld} from './world';





When("I add the first product to the cart", async function(this: CustomWorld) {
    const productsPage = new ProductsPage(page);
    this.firstProductName = await productsPage.getFirstProductName();
    await productsPage.addFirstProductToCart();
})

When("I go to the cart page", async function() {
    const cartPage = new CartPage(page);
    await cartPage.goToCartPage();
})

Then("I should see the first product visible in the cart", async function(this: CustomWorld) {
    const cartPage = new CartPage(page);
    await expect(cartPage.getProductNameCell(this.firstProductName)).toBeVisible();
})

When("I add the first product to the cart twice", async function(this: CustomWorld) {
    const productsPage = new ProductsPage(page);
    this.firstProductName = await productsPage.getFirstProductName();
    await productsPage.addFirstProductToCart();
    await productsPage.goToProductsPage();
    await productsPage.addFirstProductToCart();
    })

Then("I should see that the quantity of the product is two", async function(this: CustomWorld) {
    const cartPage = new CartPage(page);
    await expect(cartPage.getQuantityCell(this.firstProductName)).toHaveText("2");
})

Then("I should see the modal displayed", async function() {
    const productsPage = new ProductsPage(page);
    await expect(productsPage.getAddedToCartModal()).toBeVisible();
})

When("I click on continue shopping on the modal", async function() {
    const productsPage = new ProductsPage(page);
    await productsPage.closeModal();
})

Then("I should see that the modal is closed", async function() {
    const productsPage = new ProductsPage(page);
    await expect(productsPage.getAddedToCartModal()).not.toBeVisible();
})

When("I click on view cart on the modal", async function() {
    const productsPage = new ProductsPage(page);
    await productsPage.goToCartFromModal();
})

Then("I should see the cart page", async function() {
    await expect(page).toHaveURL("https://automationexercise.com/view_cart");
})