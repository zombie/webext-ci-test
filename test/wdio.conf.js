"use strict";

const {resolve} = require("path");
const extension = resolve(__dirname, "..");

exports.config = {
  path: "/",
  port: 9515,

  services: ["chromedriver"],
  capabilities: [{
    chromeOptions: {
      args: [`--load-extension=${extension}`],
    }
  }],

  logLevel: "verbose",
  specs: ["./test/test-*.js"],
}
