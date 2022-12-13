import { When, Then } from "@wdio/cucumber-framework";
import apiHelpers from "../../Helpers/apiHelpers.js";
import constants from "../../dataTest/constants.json" assert { type: "json" };

let response
let dataLoader = constants.REQUEST

When(/^User calls API to Delete an existing User$/, async () => {
    await browser.call(async function () {
        response = apiHelpers.DELETE(dataLoader.baseUrl, dataLoader.endpoint, dataLoader.eToken,dataLoader.query.id)
    }
    )
});

Then(/^Response must return status code is 204$/, async () => {

    expect(response.status == 204)

});




