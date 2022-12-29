"use strict";
exports.__esModule = true;
exports.calcArea = void 0;
var calcArea = function (shape) {
    switch (shape.tag) {
        case 'square': return shape.size * shape.size;
        case 'rectangle': return shape.width * shape.width;
        case 'circle': return Math.PI * shape.radius * shape.radius;
    }
    return 0;
};
exports.calcArea = calcArea;
