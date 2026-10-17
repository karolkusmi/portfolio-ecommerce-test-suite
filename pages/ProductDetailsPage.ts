import {Locator, Page} from "@playwright/test";

export class ProductDetailsPage {
private page: Page;
private productInfo: Locator;
private quantityInput: Locator;
private addToCartButton: Locator;
private modalDetailsProductPage: Locator;


    constructor(page: Page) {
        this.page = page;
        this.productInfo = page.locator(".product-information");
        this.quantityInput = this.productInfo.locator("#quantity");
        this.addToCartButton = this.productInfo.getByRole("button", {name: "Add to cart"});
        this.modalDetailsProductPage = page.locator("#cartModal");
    }

    getProductName(): Locator {
        return this.productInfo.getByRole("heading", {level: 2});
    }

    getFieldValue(field: string): Locator {
        return this.productInfo.locator("p", {hasText: field});
    }
    async fillQuantity(quantity: string): Promise<void> {
        await this.quantityInput.fill(quantity);
    }

    async clickAddToCart(): Promise<void> {
        await this.addToCartButton.click();
        await this.modalDetailsProductPage.waitFor();
    
    }
}