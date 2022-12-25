"use strict";
exports.__esModule = true;
var second_order_func_1 = require("./second-order-func");
var add1 = (0, second_order_func_1.add)(1);
console.log(add1(2), (0, second_order_func_1.add)(1)(2));
