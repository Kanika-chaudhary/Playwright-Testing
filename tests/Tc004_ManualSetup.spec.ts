
import {chromium, test,Browser, Page} from "@playwright/test";

test("Launch chrome browser",async({})=>{

    //Open browser
    let browser:Browser=await chromium.launch({headless:false,channel:"chrome"});

    //browser--->New page(tab)
   let page:Page=await browser.newPage();

   //Open app
   await page.goto("https:www.facebook.com");

   //get the title
   console.log("Title is: "+await page.title());

   //close browser
   await page.close();
   







})