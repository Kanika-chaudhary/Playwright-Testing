
//expect is one of the object of playwright which will help to assert the things. Wahtever assertion we want to apply on page we can do with the help of expect
//For assertion in PW we use expect()
import {test,expect} from "@playwright/test";


test("Test for google title",async({page})=>{

    //Open app
    await page.goto("https://www.google.com");

    //get current page title
   let appTitle:string=await page.title();
   console.log("Application title is: "+appTitle);


   //Validate title based on store data into variable
   //Hard assertion
   //Variable level assertion and Autowait of 5 sec Not applicable
   expect(appTitle).toBe("Google");
   console.log("Title matched...");



   //Validate title based on page level: PW autowait for assertion applicable here
   //Page level assertion. Autowait applicable on page level not on variable level.
   await expect(page).toHaveTitle("Google");
   console.log("Page title matched");

   
   


//Validate using conditional statement
   /*
   if(appTitle==="Google")
   {
    console.log("Application title matched...Test Pass");
    
   }
   else{
    console.log("Application title not matched...Test Fail");
    
   }
    */
   

})


//Test Case 2
   test.only("Validate Title URL",async({page})=>{

    await page.goto("https://www.google.com/");
    console.log("Application title is: "+await page.title());
    console.log("Application URL is: "+page.url());
    
    //Validate page URL
    await expect(page).toHaveURL("https://www.google.com/");
    console.log("Full URL matched");

    //Validate partial URL
   await expect(page).toHaveURL(/google/);
   console.log("Partial url matched..");
   
    
    
    


   })