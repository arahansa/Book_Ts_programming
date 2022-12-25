"use strict";
exports.__esModule = true;
var compose_1 = require("./compose");
var inc = function (x) { return x + 1; };
var composed = (0, compose_1.compose)(inc, inc, inc);
console.log(composed(1));
