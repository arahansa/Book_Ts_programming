"use strict";
exports.__esModule = true;
var R = require("ramda");
var numbers = R.range(1, 9 + 1);
R.tap(function (n) { return console.log(n); })(numbers);
