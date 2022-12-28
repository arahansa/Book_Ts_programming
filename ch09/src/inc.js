"use strict";
exports.__esModule = true;
var R = require("ramda");
var numbers = R.range(1, 9 + 1);
var incNumbers = R.pipe(R.tap(function (a) { return console.log('before inc : ', a); }), R.map(R.inc), R.tap(function (a) { return console.log('after inc :', a); }));
var newMembers = incNumbers(numbers);
console.log(newMembers);
