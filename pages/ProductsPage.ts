import {Page, Locator} from "@playwright/test";

export class ProductsPage {
    private page: Page;
    private product: Locator;
    private inputSearch: Locator;
    private searchButton: Locator;
    private productList: Locator;

    constructor (page: Page) {
        this.page = page;
        this.product = page.locator(".single-products");
        this.inputSearch = page.getByPlaceholder("Search Product");
        this.searchButton = page.locator("#submit_search")
        this.productList = page.locator(".single-products p");
    }

    async goToProductsPage() {
        await this.page.goto("https://automationexercise.com/products", {waitUntil: 'domcontentloaded'});
    }

    getFirstProduct() {
        return this.product.first();
    }

    async searchProduct(word: string) {
        await this.inputSearch.fill(word);
        await this.searchButton.click();
    }

    async getProductsList() {
        return await this.productList.allTextContents();
    }
}