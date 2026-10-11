import {When, Then} from '@cucumber/cucumber';
import {page} from './hooks';
import {expect} from '@playwright/test';
import {CartPage} from '../../pages/CartPage';
import {ProductsPage} from '../../pages/ProductsPage';


let firstProductName: string = "";


When("I add the first product to the cart", async function() {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    firstProductName = await productsPage.getFirstProductName();
    await productsPage.addFirstProductToCart();
    await cartPage.goToCartPage();
})

Then("I should see the first product visible in the cart", async function() {
    const cartPage = new CartPage(page);
    await expect(await cartPage.getFirstProductNameCell(firstProductName)).toBeVisible();
})

When("I add the first product to the cart twice", async function() {
    const productsPage =  new ProductsPage(page);
    const cartPage = new CartPage(page);
    firstProductName = await productsPage.getFirstProductName();
    await productsPage.addFirstProductToCart();
    await cartPage.goToCartPage();
    await productsPage.goToProductsPage();
    await productsPage.addFirstProductToCart();
    await cartPage.goToCartPage();
})

Then("I should see that the quantity of the product is two", async function() {
    const cartPage = new CartPage(page);
    await expect(await cartPage.getQuantityCell(firstProductName)).toHaveText("2");
})

