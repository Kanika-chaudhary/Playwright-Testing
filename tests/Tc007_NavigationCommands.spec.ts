
import {expect, test} from "@playwright/test"

test("Test for navigation",async ({page})=>{

    await page.goto("https://www.google.com");
    console.log("Google Title is: "+await page.title());

    //facebook app in same session
    await page.goto("https://www.facebook.com");
    console.log("Facebook Title is: "+await page.title());

    //goback
   await page.goBack();
   await expect(page).toHaveTitle("Google");

   await page.waitForTimeout(1000);

   //go forward
   await page.goForward();
   await expect(page).toHaveTitle("Facebook");

   await page.waitForTimeout(1000);

  await page.reload();

  await page.waitForTimeout(2000);
    
    







})