
import { test } from "@playwright/test";

test("Test application on mobile web",async({page})=>{

    await page.goto("https://www.saucedemo.com/");
    page.locator("#user-name").fill("PlaywrightUser");

    //wait
    await page.waitForTimeout(2000);





})