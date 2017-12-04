"use strict";

const assert = require("assert");

function screenshot() {
  const ss = browser.saveScreenshot();
  const buff = Buffer.from(Object.keys(ss).map(k => ss[k]));
  console.log("data:image/png;base64," + buff.toString("base64"));
}

describe("PR Listings", function () {
  it("should redact the author", function () {
    browser.url("https://github.com/login");
    screenshot();

    browser.setCookie({name: "user_session", value: process.env.USER_SESSION});
    browser.url("https://github.com/pulls/mentioned");
    screenshot();

    const pr1 = $(".opened-by").getText();
    assert.ok(pr1.match(/^#1 opened \d+ days ago by$/), pr1);
    browser.executeAsync(done => setTimeout(done, 1000));
  });
});
