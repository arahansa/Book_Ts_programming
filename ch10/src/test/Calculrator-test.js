"use strict";
exports.__esModule = true;
var Calculator_1 = require("../classes/Calculator");
var value = (new Calculator_1.Calculator(1)).add(2).add(3).multiply(4).value();
console.log(value);
