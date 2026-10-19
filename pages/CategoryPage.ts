import {Page, Locator} from "@playwright/test";

export class CategoryPage {
private page: Page;
private categoryList: Locator;
private womenCategoryLink: Locator;
private womenSubcategoriesPanel: Locator;
private womenSubcategoryLinks: Locator;

constructor(page: Page) {
        this.page = page;
        this.categoryList = page.locator(".category-products").locator(".panel-title");
        this.womenCategoryLink = page.getByRole("link", {name: "Women"});
        this.womenSubcategoriesPanel = page.locator("#Women");
        this.womenSubcategoryLinks = this.womenSubcategoriesPanel.getByRole("link");
    }

    getCategoryList(): Locator {
        return this.categoryList;
    }

    async clickWomenCategory()  : Promise<void> {
        await this.womenCategoryLink.click();
    }

    getWomenSubcategoriesPanel(): Locator {
        return this.womenSubcategoriesPanel;
    }

    getWomenSubcategoryLinks(): Locator {
        return this.womenSubcategoryLinks;
    }
}