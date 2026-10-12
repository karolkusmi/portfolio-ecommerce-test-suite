import {Page, Locator} from '@playwright/test';

export class CartPage{
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToCartPage(): Promise<void> {
        await this.page.goto("https://automationexercise.com/view_cart");
    }

    getProductRow(productName: string): Locator {
        return this.page.locator("tr", {hasText: productName});
    }
    getProductNameCell(productName: string): Locator {
        return  this.getProductRow(productName).locator(".cart_description");  
    }
    getQuantityCell(productName: string): Locator {
        return this.getProductRow(productName).locator(".cart_quantity")
    }
    
    
}