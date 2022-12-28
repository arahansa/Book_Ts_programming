"use strict";
exports.__esModule = true;
var R = require("ramda");
var incNumbers = R.pipe(R.map(R.add(1)), R.tap(function (a) { return console.log('after add(1) : ', a); }));
var newNumbers = incNumbers(R.range(1, 9 + 1));
