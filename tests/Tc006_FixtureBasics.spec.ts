
import {BrowserContext, Page, test} from "@playwright/test"
/*
test("start browser-->context-->page",async ({browser})=>{

    //browser-->open new 1st context
    //newcontext(): Creates a new browser context. It won't share cookies/cache with other browser contexts.
   
   let context1:BrowserContext=await browser.newContext();

   //context1-->Open tab and google app
   //newpage(): Creates a new page in the browser context
   let page1:Page=await context1.newPage();
   //Page to app
   page1.goto("https://www.google.com"); 

   //Context 2
   let context2:BrowserContext=await browser.newContext();

   //open tabs: we use page fixture
   let page2:Page=await context2.newPage();
   //page to app
   await page2.goto("https://www.facebook.com");

   await page2.waitForTimeout(4000);


})*/


test("one Browser-->one Context-->two tabs",async ({browser})=>{

    //browser-->context
   let context:BrowserContext=await browser.newContext();

   //Context to new page
  let page1:Page= await context.newPage();

  let page2:Page=await context.newPage();

 await page1.goto("https://www.google.com");
 await page2.goto("https://www.facebook.com");

 await page2.waitForTimeout(3000);

})
