var makeNames = function () {
    var names = ['Jack', 'Jane', 'Smith'];
    var index = 0;
    return function () {
        if (index === names.length)
            index = 0;
        return names[index++];
    };
};
var makeName = makeNames();
console.log([1, 2, 3, 4, 5, 6].map(function (n) { return makeName(); }));
