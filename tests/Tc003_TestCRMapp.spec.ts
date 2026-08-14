
//Import test runner
import {test} from "@playwright/test";

test("Open crm",async({page})=>{
    await page.goto("https://automationplayground.com/crm/");
    console.log("Title is "+await page.title());
    console.log("Current URL is: "+page.url());
    
    

})
