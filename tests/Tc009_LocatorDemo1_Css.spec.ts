
import {Locator, test} from "@playwright/test"

test("Google test",async ({page})=>{

   await page.goto("https://www.google.com");

   //Strategy 1: Identify +Validate+ Action
   //If need validation then store the element in variable
   let searchBox:Locator=page.locator("#APjFqb");
   //Now validate
   console.log("Is element visible? "+await searchBox.isVisible());
   console.log("Is element enabled? "+await searchBox.isEnabled());
   console.log("Is element editable? "+await searchBox.isEditable());

   //Now action
   await searchBox.fill("Playwright");
   await page.waitForTimeout(1000);
   await searchBox.clear();

   //Add pause
   await page.waitForTimeout(2000);
   
   
   
   
   //Strategy 2: Identify element + Direct perform Action
   await page.locator("#APjFqb").fill("Javascript");








})