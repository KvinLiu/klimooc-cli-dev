'use strict';

const utils = require("@klimooc-cli-dev/utils")

function core() {
  return 'Hello from core';
}

console.log(core())
console.log(utils())

module.exports = core;
