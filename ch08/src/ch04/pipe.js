"use strict";
exports.__esModule = true;
exports.pipe = void 0;
var pipe = function () {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i] = arguments[_i];
    }
    return function (x) {
        return functions.reduce(function (value, func) { return func(value); }, x);
    };
};
exports.pipe = pipe;
