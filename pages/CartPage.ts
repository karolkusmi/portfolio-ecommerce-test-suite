import {Page} from '@playwright/test';

export class CartPage{
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToCartPage() {
        await this.page.goto("https://automationexercise.com/view_cart");
    }
    getFirstProductNameCell(productName: string) {
        return  this.page.getByText(productName)  
    }
    getQuantityCell(productName: string) {
        return this.page.locator("tr", {hasText: productName}).locator(".cart_quantity")
    }
    
    
}