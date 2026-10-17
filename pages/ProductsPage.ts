import {Page, Locator} from "@playwright/test";

export class ProductsPage {
    private page: Page;
    private product: Locator;
    private inputSearch: Locator;
    private searchButton: Locator;
    private productList: Locator;
    private addToCartButton: Locator;
    private addedToCartModal: Locator;
    private modalContinueShoppingButton: Locator;
    private modalViewCartButton: Locator;
    private productCard: Locator;
    
   
    constructor (page: Page) {
        this.page = page;
        this.product = page.locator(".single-products");
        this.inputSearch = page.getByPlaceholder("Search Product");
        this.searchButton = page.locator("#submit_search");
        this.productList = page.locator(".single-products p");
        this.addToCartButton = page.locator(".add-to-cart");
        this.addedToCartModal = page.locator("#cartModal");
        this.modalContinueShoppingButton = page.getByRole("button", {name: "Continue Shopping"});
        this.modalViewCartButton = page.getByRole("link", {name: "View Cart"});
        this.productCard = page.locator(".product-image-wrapper");
        

    }

    async goToProductsPage(): Promise<void> {
        await this.page.goto("https://automationexercise.com/products", {waitUntil: 'domcontentloaded'});
    }

    getFirstProduct(): Locator {
        return this.product.first();
    }

    async searchProduct(word: string): Promise<void> {
        await this.inputSearch.fill(word);
        await this.searchButton.click();
    }

    async getProductsList(): Promise<string[]> {
        return await this.productList.allTextContents();
    }

    async getFirstProductName(): Promise<string> {
        return (await this.productList.first().textContent())!;
    }

    async addFirstProductToCart(): Promise<void> {
        await this.addToCartButton.first().click();
        await this.addedToCartModal.waitFor();
    }
    getAddedToCartModal(): Locator {
        return this.addedToCartModal;
    }

    async closeModal(): Promise<void> {
        await this.modalContinueShoppingButton.click();
    }

    async goToCartFromModal(): Promise<void> {
        await this.modalViewCartButton.click();
    }

    async goToFirstProductDetails(): Promise<void> {
        await this.productCard.first().getByRole("link", {name: "View Product"}).click();

    }

}

    
