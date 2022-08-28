import TabBar from '../screenobjects/components/TabBar';
import LoginScreen from '../screenobjects/LoginScreen';
import NativeAlert from '../screenobjects/components/NativeAlert';
import {Given, When, Then} from '@wdio/cucumber-framework';

Given(/^I launch the app$/, async () => {
    await TabBar.waitForTabBarShown();
    await TabBar.openLogin();
    await LoginScreen.waitForIsShown(true);
    //  // Always make sure you are on the right tab
    //  await LoginScreen.tapOnLoginContainerButton();
    //  // Submit the data
    //  await LoginScreen.submitLoginForm({ username: 'test@webdriver.io', password: 'Test1234!' });
});

When(/^I login with username and password$/, async (username, password) => {
    // Always make sure you are on the right tab
    await LoginScreen.tapOnLoginContainerButton();
    // Submit the data
    await LoginScreen.submitLoginForm({ username: 'test@webdriver.io', password: 'Test1234!' });
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    // Wait for the alert and validate it
    await NativeAlert.waitForIsShown();
    await expect(await NativeAlert.text()).toContain(message);

    // Close the alert
    await NativeAlert.topOnButtonWithText('OK');
    await NativeAlert.waitForIsShown(false);
});
