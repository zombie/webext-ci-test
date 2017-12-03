"use strict";

const assert = require("assert");

function screenshot() {
  const ss = browser.saveScreenshot();
  const buff = Buffer.from(Object.keys(ss).map(k => ss[k]));
  console.log("data:image/png;base64," + buff.toString("base64"));
}

describe("webdriverio", function () {
  it("should run a test", function () {
    browser.url("https://github.com/login");
    screenshot();

    browser.setCookie({name: "user_session", value: process.env.USER_SESSION});
    browser.url("https://github.com/pulls/mentioned");
    screenshot();

//    assert.equal(browser.getTitle(), "Example Domain");
    browser.executeAsync(done => setTimeout(done, 1000));
  });
});
