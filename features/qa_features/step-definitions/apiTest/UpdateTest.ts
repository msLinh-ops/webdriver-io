import { When, Then } from "@wdio/cucumber-framework";
import apiHelpers from "../../Helpers/apiHelpers";
import { REQUEST } from "../../dataTest/constants.json" assert { type: "json" };


let response

When(/^User calls API to update an existing User$/, async () => {
    await browser.call(async function () {
        response = apiHelpers.PATCH(REQUEST.baseUrl, REQUEST.endpoint, REQUEST.query, REQUEST.eToken, REQUEST.updatedInfor)
    })
});

Then(/^Response must return status code is 201$/, async () => {
    expect(response.status == 201)
});

When(/^User calls API to view updated User$/, async () => {
    await browser.call(async function () {
        response = apiHelpers.GET(REQUEST.baseUrl, REQUEST.endpoint, '', REQUEST.query.id)

    })

});

Then(/^Response must return status code is 200$/, async () => {
    expect(response.status) == 200
});

Then(/^Updated information is dispalyed$/, async () => {
    expect(response.gender) == REQUEST.updatedInfor.gender
});


