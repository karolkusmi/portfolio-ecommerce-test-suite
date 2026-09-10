import {Browser, Page, chromium} from "@playwright/test";
import {Before, After} from "@cucumber/cucumber";
import 'dotenv/config';

export let page: Page;
export let browser: Browser;

Before(async () => {
    browser = await chromium.launch(); 
    page = await browser.newPage();
})

After(async function(scenario) {
    if (scenario.result?.status === "FAILED") {
        const screenshot = await page.screenshot()
        await this.attach(screenshot, "image/png")
    }

    await browser.close();
})
