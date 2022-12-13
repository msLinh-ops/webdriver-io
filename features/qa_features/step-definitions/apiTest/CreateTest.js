import { When, Then } from "@wdio/cucumber-framework";
import apiHelpers from "../../Helpers/apiHelpers.js";
import constants from "../../dataTest/constants.json" assert { type: "json" };


let response
let dataLoader = constants.REQUEST



When(/^User calls API to create a new User$/, async () => {

    await browser.call(async function () {
        response = apiHelpers.POST(dataLoader.baseUrl, dataLoader.endpoint, dataLoader.eToken, dataLoader.payload)
    }
    )
});

Then(/^Status code is 201$/, async() => {
	expect(response.status == 201)
});





