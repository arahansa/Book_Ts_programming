"use strict";
exports.__esModule = true;
var third_order_func_1 = require("./third-order-func");
var add2 = (0, third_order_func_1.add3)(1);
var add1 = add2(2);
console.log(add1(3), add2(2)(3), (0, third_order_func_1.add3)(1)(2)(3));
