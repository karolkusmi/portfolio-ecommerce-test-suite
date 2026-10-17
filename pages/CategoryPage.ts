import {Page, Locator} from "@playwright/test";

export class CategoryPage {
private page: Page;
private categoryList: Locator;

constructor(page: Page) {
        this.page = page;
        this.categoryList = page.locator(".category-products").locator(".panel-title");
    }

    getCategoryList(): Locator {
        return this.categoryList;
    }
}