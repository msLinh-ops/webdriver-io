import { When, Then } from "@wdio/cucumber-framework";
import apiHelpers from "../../Helpers/apiHelpers";
import { REQUEST } from "../../dataTest/constants.json" assert { type: "json" };

let response

When(/^User calls API to Delete an existing User$/, async () => {
    await browser.call(async function () {
        response = apiHelpers.DELETE(REQUEST.baseUrl, REQUEST.endpoint, REQUEST.eToken, REQUEST.query.id)
    }
    )
});

Then(/^Response must return status code is 204$/, async () => {
    expect(response.status == 204)

});




