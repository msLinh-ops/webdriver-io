const {config} = require('../mobile.config.js');
const AndroidInfo = require('./android.info');

// Appium capabilities
config.capabilities = [
    {
        platformName: 'Android',
        'appium:browserName': 'Chrome',
        maxInstances: 1,
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': AndroidInfo.deviceName(),
        'appium:platformVersion': AndroidInfo.platFormVersion()
    }
];

config.cucumberOpts.tagExpression = '@androidBrowser'; // pass tag to run tests specific to android

exports.config = config;
