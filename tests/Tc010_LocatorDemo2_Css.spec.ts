
import {expect, test} from "@playwright/test"

test("Login page test",async ({page})=>{

    //open application
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    //email id: tagname with id
    await page.locator("input#input-email").fill("test2525@gmail.com");

    //email id: tagname with attribute
    await page.locator("input[name='password']").fill("test123");

    //Login button:Tagname with classname
    //await page.locator("input.btn.btn-primary").click();

     //login Button with tagname classname and attribute
     await page.locator("input.btn.btn-primary[value='Login']").click();

      //assertion on title: toHaveTitle(): Ensures the page has the given title.
      await expect(page).toHaveTitle("My Account");
      console.log("Login success");

      await expect(page).toHaveURL(/account/);
      console.log("User Navigated to account page");
      
      
      





})