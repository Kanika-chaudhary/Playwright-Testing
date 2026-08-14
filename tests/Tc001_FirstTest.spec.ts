
//Call test runner first
import {test} from "@playwright/test";

//create test case using test function test()
//Indicates one test case
//Destructuring {}: For object if there are some key and value pair and i don't want to use all properties i.e key and value but only few then pass it in {} curly brackets. This is destructuring.
test("Test for application launch",async({page})=>{

    //open application
    await page.goto("https://www.google.com"); //returns Promise<Response | null>

     //static wait in PW: waitForTimeout: used for debugging : Waits for the given timeout in milliseconds.
    await page.waitForTimeout(2000);


})



























//How playwright decide worker count?
//Ans: It depends on our system configuration. Whatever core numbers are available for cpu, based on that core number playwright occupy 50% of that core as a worker count.
//What is the main purpose of worker count?
//Ans: Worker generate a process through which we can run multiple test cases in a parallel mode.