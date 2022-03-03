const fs=require('fs');
const { ReportAggregator, HtmlReporter } = require('@rpii/wdio-html-reporter') ;
const path = require('path');
var log4js = require('log4js');

// Using our Custom report
//import CustomReporter from './reports/customReportTemplate'
exports.config = {

    // Oficial Documentation: https://webdriver.io/docs/options/#suites
    suites: {
        smoke: [
            './tests/e2e/specs/**/**.smoke.spec.js'
        ],
        regression: [
            './tests/e2e/specs/**/**.regression.spec.js'
        ]
    },

    sync: true,

    /**
     *  Oficial Documentation: https://webdriver.io/docs/options/#loglevel
     */
    logLevel: 'silent',

    /**
     *     Oficial Documentation: https://webdriver.io/docs/options/#bail
     */
    bail: 0,

    /**
     * Oficial Documentation: https://webdriver.io/docs/options/#baseurl
     */
    baseUrl: 'https://www.netflix.com/ar/',

    /**
     * Oficial Documentation: https://webdriver.io/docs/options/#waitfortimeout
     */
    waitforTimeout: 10000,

    /**
     * Oficial Documentation: https://webdriver.io/docs/options/#waitforinterval
     */
    waitforInterval:500,

    /**
     * Default timeout in milliseconds for request
     * if Selenium Grid doesn't send response
     */
    connectionRetryTimeout: 900000,

    /**
     * Default request retries count
     */
    connectionRetryCount: 3,

    //
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'jasmine',

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        //
        // Jasmine default timeout
        defaultTimeoutInterval: 120000,
        //
        // The Jasmine framework allows interception of each assertion in order to log the state of the application
        // or website depending on the result. For example, it is pretty handy to take a screenshot every time
        // an assertion fails.
        expectationResultHandler: function(passed, assertion) {
            // do something
        }
    },
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.

    /**
     * Gets executed once before all workers get launched.
     *
     * Official Documentation: https://webdriver.io/docs/options/#onprepare
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: function (config, capabilities) {
        let reportAggregator = new ReportAggregator({
            outputDir: './reports/html-reports/',
            filename: 'tests-results.html',
            reportTitle: 'Master Report',
            browserName : capabilities[0].browserName,
        });
        reportAggregator.clean() ;
        global.reportAggregator = reportAggregator;
    },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     *
     * Official Documentation: https://webdriver.io/docs/options/#beforesession
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
     beforeSession: function (config, capabilities, specs) {
        require("regenerator-runtime/runtime");
     },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     *
     * Official Documentation: https://webdriver.io/docs/options/#before
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    before: function (capabilities, specs) {
        require('@babel/register');
        require("regenerator-runtime/runtime");
    },

    /**
     * Hook that gets executed before the suite starts
     *
     * Official Documentation: https://webdriver.io/docs/options/#beforesuite
     * @param suite
     */
    beforeSuite: function(suite){
        const path = require('path');
        const moment = require('moment');
    },

    /**
     * Gets executed after all workers got shut down and the process is about to exit.
     * An error thrown in the onComplete hook will result in the test run failing.
     *
     * Official Documentation: https://webdriver.io/docs/options/#oncomplete
     * @param exitCode
     * @param config
     * @param capabilities
     * @param results
     */
    onComplete: function(exitCode, config, capabilities, results) {
        (async () => {
            await global.reportAggregator.createReport();
        })();
    },

    /**
     * Function to be executed after a test (in Mocha/Jasmine) ends.
     *
     * Official Documentation: https://webdriver.io/docs/options/#aftertest
     * @param test
     */
    afterTest: function (test) {
        const path = require('path');
        const moment = require('moment');

        // if test passed, ignore, else take and save screenshot.
        if (test.passed) {
            return;
        }

        const timestamp = moment().format('YYYYMMDD-HHmmss.SSS');
        const filepath = path.join('reports/html-reports/screenshots/', timestamp + '.png');
        browser.saveScreenshot(filepath);
        process.emit('test:screenshot', filepath);
    },

    /**
     * List of reporters to use. A reporter can be either a string,
     * or an array of ['reporterName', { /* reporter options } ]
     * where the first element is a string with the reporter name and the second element
     * an object with reporter options.
     *
     * Official Documentation: https://webdriver.io/docs/options/#reporters
     */
    reporters: ['spec',
        [HtmlReporter, {
            debug: true,
            outputDir: './reports/html-reports/',
            filename: 'report.html',
            reportTitle: 'Master Report',

            //to show the report in a browser when done
            showInBrowser: false,
            //to turn on screenshots after every test
            useOnAfterCommandForScreenshot: false,

            //to initialize the logger
            LOG: log4js.getLogger("default")
        }],
        /*,
        /**
         * use imported reporter class
         */
/*        [CustomReporter, {
            domain: 'foobar',
        }]*/
        /**
         * use absolute path to reporter
         */
        /*['/path/to/reporter.js', { someOption: 'foobar'}]*/
    ],
};
