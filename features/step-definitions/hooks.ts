import {Browser, Page, chromium} from "@playwright/test";
import {Before, After} from "@cucumber/cucumber";
import 'dotenv/config';
import { setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60000);
export let page: Page;
export let browser: Browser;

Before(async function() {
    browser = await chromium.launch(); 
    page = await browser.newPage();
    await page.route(/doubleclick|googlesyndication|fundingchoices|adservice|googletagservices/, route => route.abort());

})

After(async function(scenario) {
    if (scenario.result?.status === "FAILED") {
        const screenshot = await page.screenshot()
        await this.attach(screenshot, "image/png")
    }

    await browser.close();
})
