"use strict";
exports.__esModule = true;
var f_g_h_1 = require("./f-g-h");
var pipe_1 = require("./pipe");
var piped = (0, pipe_1.pipe)(f_g_h_1.f, f_g_h_1.g, f_g_h_1.h);
console.log(piped('x'));
