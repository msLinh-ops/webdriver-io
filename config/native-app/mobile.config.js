const {config} = require('../../wdio.conf');

config.services = (config.services ? config.services : []).concat(['appium']);
config.appium = {
    command: 'appium',
    args: {// Auto download ChromeDriver
        relaxedSecurity: true,
        path: '/wd/hub'
        // chromedriverAutodownload: true,
        // For more arguments see
        // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    }
};
config.port = 4732;


exports.config = config;
