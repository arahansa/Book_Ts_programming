"use strict";
exports.__esModule = true;
var readFilePromise_1 = require("./readFilePromise");
(0, readFilePromise_1.readFilePromise)('./package.json')
    .then(function (content) {
    console.log(content);
    return (0, readFilePromise_1.readFilePromise)('./tsconfig.json');
})
    .then(function (content) {
    console.log(content);
    return (0, readFilePromise_1.readFilePromise)('.');
})["catch"](function (err) { return console.log('error: ', err.message); })["finally"](function () { return console.log('프로그램 종료'); });
