"use strict";
exports.__esModule = true;
var f_g_h_1 = require("./f-g-h");
var compose_1 = require("./compose");
var composedFGH = (0, compose_1.compose)(f_g_h_1.h, f_g_h_1.g, f_g_h_1.h);
console.log(composedFGH('X'));
