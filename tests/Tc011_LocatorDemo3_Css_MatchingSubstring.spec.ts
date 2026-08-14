
import{Locator, test} from "@playwright/test"

test("Test for matching substrings in CssSelector",async ({page})=>{

    //Open app
    await page.goto("https://www.amazon.in/");

    await page.locator("input#twotabsearchtextbox").fill("Bags");

    //Partial
   let searchEle1:Locator= page.locator("input[id*='twotabsearc']");
   await searchEle1.clear();
   await searchEle1.fill("Mobile");
   await searchEle1.press('Enter');


   //search box identify with prefix  ^
   let searchEle2:Locator=page.locator("input[id^='twotab']");
   await searchEle2.clear();
   await searchEle2.fill("Laptops");
   await searchEle2.press('Enter');


   //search box identify with suffix $
   let searchEle3:Locator=page.locator("input[id$='textbox']");
   await searchEle3.clear();
   await searchEle3.fill("Toys");
   await searchEle3.press('Enter');
   



    










})