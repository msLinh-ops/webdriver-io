const {config} = require('../mobile.config.js');
const AndroidInfo = require('./android.info');
const path = require('path');

// Appium capabilities
config.capabilities = [
    {
        platformName: 'Android',
        // noReset: true,
        // fullReset: false,
        maxInstances: 1,
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': AndroidInfo.deviceName(),
        'appium:platformVersion': AndroidInfo.platFormVersion(),
        'appium:app': path.resolve(`./apps/${AndroidInfo.appName()}`),
        // @ts-ignore
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        'appium:newCommandTimeout': 240
    },
    {
        platformName: 'Android',
        // noReset: true,
        // fullReset: false,
        maxInstances: 1,
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': AndroidInfo.deviceName(),
        'appium:platformVersion': AndroidInfo.platFormVersion(),
        'appium:app': path.resolve(`./apps/${AndroidInfo.appName()}`),
        // @ts-ignore
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        'appium:newCommandTimeout': 240
    }
];

config.specs = [
        './features/**/native.app*.feature'
    ];

config.cucumberOpts.tagExpression = '@androidApp'; // pass tag to run tests specific to android

config.cucumberOpts.require = ['./features/step-definitions/app.login.steps.ts'];

exports.config = config;
