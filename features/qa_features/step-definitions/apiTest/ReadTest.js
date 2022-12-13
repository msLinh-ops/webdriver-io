import { When, Then } from "@wdio/cucumber-framework";
import apiHelpers from "../../Helpers/apiHelpers.js";
import constants from "../../dataTest/constants.json" assert { type: "json" };


let res, totalNumber

When(/^User calls API to get User list$/, async function() {
    await browser.call(async function() {
        res = apiHelpers.GET(constants.REQUEST.baseUrl, constants.REQUEST.endpoint, '', constants.REQUEST.query.id)

    })
});


Then(/^Response returns status code is 200$/, async () => {
    expect(res.status == 200)
});


Then(/^Verify the total of record must equal "([^"]*)"$/, async(args1) => {
    totalNumber = constants.REQUEST.totalNumber
    expect(res.total = totalNumber)
});





