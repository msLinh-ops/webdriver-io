const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');

const pages = {
	login: LoginPage
}

Given(/^User is on the (\w+) page$/, async (page) => {
	await pages[page].open()
});


When(/^User logins with invalid "([^"]*)" and "([^"]*)"$/, async (username, password) => {
	await LoginPage.login(username, password)
});

Then(/^User should be promped an Error message with text "([^"]*)"$/, async (err) => {
	await expect(LoginPage.titlePage).toHaveTextContaining(err)
});

When(/^User logins with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
	await LoginPage.login(username, password)
});


Then(/^User should be navigated to page with "([^"]*)"$/, async (args1) => {
	await expect(LoginPage.titlePage).toHaveTextContaining(args1)
});