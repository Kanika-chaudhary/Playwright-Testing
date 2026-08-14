
import {test} from "@playwright/test"

test("Test for Google",async ({page})=>{
   await page.goto("https://www.google.com",{timeout:4000,waitUntil:'domcontentloaded'});
   console.log("Google Title is:"+await page.title());
   

})

test("Test for facebook",async ({page})=>{

    await page.goto("https://www.facebook.com");
    console.log("Facebook title is: "+await page.title());
    

})

test("Test for amazon",async ({page})=>{

    await page.goto("https://www.amazon.com",{waitUntil:'domcontentloaded'});

   await page.waitForLoadState('domcontentloaded',{timeout:5000});
    
    await page.waitForTimeout(2000);
    console.log("Amazon title is: "+await page.title());
    

      await page.waitForTimeout(2000);




})