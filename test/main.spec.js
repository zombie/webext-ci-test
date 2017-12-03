"use strict";

var assert = require('assert');
var path = require('path');

describe('webdriverio', function () {
  it('should run a test', function () {
    browser.url('http://example.com/');
    assert.equal(browser.getTitle(), 'Example Domain');

    browser.timeouts('script', 60000);

    var ss = browser.saveScreenshot();
    var buf = Buffer.from(Object.keys(ss).map(k => ss[k]));
    console.log("data:image/png;base64," + buf.toString("base64"));

    console.log("path", path.resolve(__dirname, "../example"));

    browser.executeAsync(function (done) {
      console.log('this should not fail');
      setTimeout(done, 16000);
    });

  });
});
