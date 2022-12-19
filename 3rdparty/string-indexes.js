Object.defineProperty(exports, "__esModule", { value: true });
var indexes = function (str, substr) {
    var indexes = [];
    var substrLength = substr.length;
    var indexFrom = 0;
    while (true) {
        var index = str.indexOf(substr, indexFrom);
        if (index === -1)
            return indexes;
        indexes.push(index);
        indexFrom = index + substrLength;
    }
};
exports.default = indexes;
