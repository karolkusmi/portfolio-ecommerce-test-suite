import {Given, When, Then} from "@cucumber/cucumber";
import {page} from "./hooks";
import {expect} from "@playwright/test";
import {CategoryPage} from "../../pages/CategoryPage";

Then("I should see the sidebar displayed with Women, Men and Kids categories", async function() {
    const categoryPage = new CategoryPage(page);
    await expect(categoryPage.getCategoryList()).toHaveText(["Women", "Men", "Kids"]);
    })

When("I click on Women category", async function() {
    const categoryPage = new CategoryPage(page);
    await categoryPage.clickWomenCategory();
})

Then("I should see the subcategories displayed with Dress, Tops and Saree", async function() {
    const categoryPage = new CategoryPage(page);
    await expect (categoryPage.getWomenSubcategoriesPanel()).toBeVisible();
    await expect (categoryPage.getWomenSubcategoryLinks()).toHaveText(["Dress", "Tops", "Saree"]);
})

When("I click on category {string}", async function(category: string) {
    await page.locator(`.category-products a[href="#${category}"]`).click();
 })

When("I click on subcategory {string}", async function(subcategory: string) {
    await page.getByRole("link", {name: subcategory, exact: true}).click();
})

Then("I should see {string} and {string} title name", async function(category: string, subcategory: string) {
    await expect(page.getByRole("heading", {level: 2, name: `${category} - ${subcategory}`})).toBeVisible();
    await expect(page.getByRole("heading", {level: 2, name: `${category} - ${subcategory}`})).toHaveText(`${category} - ${subcategory} Products`);
})