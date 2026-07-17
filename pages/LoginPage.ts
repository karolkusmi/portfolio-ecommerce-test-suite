import {Page, Locator} from "@playwright/test";

export class LoginPage {
private page: Page;
private emailInput: Locator;
private passwordInput: Locator;
private loginButton: Locator;


constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('[data-qa="login-email"]');
    this.passwordInput = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
}

async goToLoginPage() {
    await this.page.goto('/login');
}

async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

}
}