"use strict";
exports.__esModule = true;
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator(_value) {
        if (_value === void 0) { _value = 0; }
        this._value = _value;
    }
    Calculator.prototype.value = function () {
        return this._value;
    };
    Calculator.prototype.add = function (value) {
        this._value = this._value + value;
        return this;
    };
    Calculator.prototype.multiply = function (value) {
        this._value = this._value * value;
        return this;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
