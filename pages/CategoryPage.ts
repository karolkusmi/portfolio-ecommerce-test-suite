import {Page, Locator} from "@playwright/test";

export class CategoryPage {
private page: Page;
private categoryList: Locator;
private womenCategoryLink: Locator;
private womenSubcategoriesPanel: Locator;
private womenSubcategoryLinks: Locator;
private categoryMenu: Locator;


constructor(page: Page) {
        this.page = page;
        this.categoryList = page.locator(".category-products").locator(".panel-title");
        this.womenCategoryLink = page.getByRole("link", {name: "Women"});
        this.womenSubcategoriesPanel = page.locator("#Women");
        this.womenSubcategoryLinks = this.womenSubcategoriesPanel.getByRole("link");
        this.categoryMenu = page.locator(".category-products");
    

    }

    getCategoryList(): Locator {
        return this.categoryList;
    }

    getWomenSubcategoriesPanel(): Locator {
        return this.womenSubcategoriesPanel;
    }

    getWomenSubcategoryLinks(): Locator {
        return this.womenSubcategoryLinks;
    }

    getCategoryMenu(category: string): Locator {
        return this.categoryMenu.locator(`a[href="#${category}"]`);
    }

    async clickCategory(category: string): Promise<void> {
        await this.getCategoryMenu(category).click();
    }

    async clickSubcategory(subcategory: string): Promise<void> {
        await this.page.getByRole("link", {name: subcategory, exact: true}).click();
    }

    getHeadingTitle(category: string, subcategory: string): Locator {
        return this.page.getByRole("heading", {level: 2, name: `${category} - ${subcategory}`})
    }
}