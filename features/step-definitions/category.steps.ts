import {Given, When, Then} from "@cucumber/cucumber";
import {page} from "./hooks";
import {expect} from "@playwright/test";
import {CategoryPage} from "../../pages/CategoryPage";

Then("I should see the sidebar displayed with Women, Men and Kids categories", async function() {
    const categoryPage = new CategoryPage(page);
    await expect(categoryPage.getCategoryList()).toHaveText(["Women", "Men", "Kids"]);
    })