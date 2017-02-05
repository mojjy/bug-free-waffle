var helpers = require('./helpers');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/chrome',
    filename: 'htmlReport.html',
    showQuickLinks: true,
    reportOnlyFailedSpecs: false,
    captureOnlyFailedSpecs: true,
    reportTitle: "E2E Report"
});

console.log ("setting up tests.");

//dev server
// 'http://localhost:3000/'
//local express server
// var server = 'http://localhost:5000/';
//live server
var server = 'https://fizz-buck.herokuapp.com';

exports.config = {
    baseUrl: server,

    specs: [
        helpers.root('src/**/*.e2e.ts')
    ],

    exclude: [],

    framework: 'jasmine',

    jasmineNodeOpts: {
        showColors: true,
        isVerbose: false,
        includeStackTrace: false
    },

    directConnect: false,

    capabilities: {
        browserName: 'phantomjs', //chrome
        'phantomjs.binary.path': require('phantomjs-prebuilt').path
    },

    beforeLaunch: function() {
        return new Promise(function(resolve) {
            reporter.beforeLaunch(resolve);
        });
    },

    onPrepare: function() {
        browser.ignoreSynchronization = false;

        jasmine.getEnv().addReporter(reporter);
    },

    afterLaunch: function(exitCode) {
        return new Promise(function(resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },

    useAllAngular2AppRoots: true,

};
