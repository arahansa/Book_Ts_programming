"use strict";
exports.__esModule = true;
var calcArea_1 = require("./calcArea");
var square = { tag: 'square', size: 10 };
var rectangle = { tag: 'rectangle', width: 4, height: 5 };
var circle = { tag: 'circle', radius: 10 };
console.log((0, calcArea_1.calcArea)(square), (0, calcArea_1.calcArea)(rectangle), (0, calcArea_1.calcArea)(circle));
