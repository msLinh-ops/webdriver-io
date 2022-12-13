import { When, Then } from "@wdio/cucumber-framework";
import apiHelpers from "../../Helpers/apiHelpers.js";
import constants from "../../dataTest/constants.json" assert { type: "json" };


let response
let dataLoader = constants.REQUEST


When(/^User calls API to update an existing User$/, async () => {
    await browser.call(async function () {
        response = apiHelpers.PATCH(dataLoader.baseUrl, dataLoader.endpoint, dataLoader.query, dataLoader.eToken, dataLoader.updatedInfor)
    })
});

Then(/^Response must return status code is 201$/, async () => {
    expect(response.status == 201)
});

When(/^User calls API to view updated User$/, async () => {
    await browser.call(async function () {
        response = apiHelpers.GET(dataLoader.baseUrl, dataLoader.endpoint, '', dataLoader.query.id)

    })

});

Then(/^Response must return status code is 200$/, async () => {
    expect(response.status) == 200
});

Then(/^Updated information is dispalyed$/, async () => {
    expect(response.gender) == dataLoader.updatedInfor.gender
});


