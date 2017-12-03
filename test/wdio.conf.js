var path = require("path");

exports.config = {
    port: '9515',
    path: '/',
    specs: [
        './test/*.spec.js'
    ],

    capabilities: [{
        browserName: 'chrome',
        chromeOptions: {
            args: ["--load-extension=" + path.resolve(__dirname, "../example")],
        }
    }],

    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,

    baseUrl: 'http://webdriver.io',

    waitforTimeout: 60000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    framework: 'mocha',
    mochaOpts: {
        timeout: 90000,
        ui: 'bdd'
    },

    services: ['chromedriver'],
    chromeDriverLogs: './'
}
