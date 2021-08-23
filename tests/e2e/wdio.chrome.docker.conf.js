var defaults = require("./wdio.conf.js").config;
var _ = require("lodash");
var overrides = {

  runner: 'local',

  hostname: 'chrome',

  specs: [
    './tests/e2e/specs/**/**.spec.js',
  ],

  exclude: [
    './tests/e2e/specs/**/**.localization.spec.js'
  ],
  maxInstances:10,
  capabilities: [
    {
      browserName: 'chrome',
      maxInstances:5,
      'goog:chromeOptions': {
        args: ["--headless", "--disable-gpu", "--window-size=1536,864"],
        prefs: {
          'intl.accept_languages': 'en'
        }
      }
    }
  ],

};
// Send the merged config to wdio
exports.config = _.defaultsDeep(overrides, defaults);
