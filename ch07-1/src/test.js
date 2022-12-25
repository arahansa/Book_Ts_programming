"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
console.log('read package.json using synchronous api....');
var buffer = (0, fs_1.readFileSync)('./package.json');
console.log(buffer.toString());
(0, fs_1.readFile)('./package.json', function (error, buffer) {
    console.log('read package.json using asynchronous api....');
    console.log(buffer.toString());
});
