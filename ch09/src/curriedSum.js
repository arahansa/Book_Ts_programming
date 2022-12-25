"use strict";
exports.__esModule = true;
exports.curriedSum = void 0;
var R = require("ramda");
var sum_1 = require("./sum");
exports.curriedSum = R.curryN(4, sum_1.sum);
