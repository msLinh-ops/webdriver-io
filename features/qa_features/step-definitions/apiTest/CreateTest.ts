import { When, Then } from "@wdio/cucumber-framework";
import apiHelpers from "../../Helpers/apiHelpers";
import { REQUEST } from "../../dataTest/constants.json" assert { type: "json" };

let response;


When(/^User calls API to create a new User$/, async () => {
    // await browser.call(async function () {
        response = await apiHelpers.POST(REQUEST.baseUrl, REQUEST.endpoint, REQUEST.eToken, REQUEST.payload)
        console.log("HELLO", response)
    // }
    // )
});

Then(/^Status code is 201$/, async () => {
    console.log("THEN", response.status)
    expect(response.status == 201)
});





