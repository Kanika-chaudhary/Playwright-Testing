

import {test,chromium, Browser, Page} from "@playwright/test"

test("Launch browser",async ({})=>{

    //Open browser
   let browser:Browser=await chromium.launch({headless:false,channel:"chrome"});
   let page:Page=await browser.newPage();
   await page.goto("https://www.google.com");
   console.log("Title is "+await page.title());
   








})